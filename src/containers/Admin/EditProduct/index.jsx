

import { yupResolver } from '@hookform/resolvers/yup';
import { ImageIcon } from '@phosphor-icons/react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useState, useEffect } from 'react';
import { api } from '../../../services/api';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';


import { 
   
   Container,
   ErrorMessage,
   Form,
   Input,
   InputGroup,
   Label,
   LabelUpload,
   Select,
   ContainerCheckBox,
   SubmitButton,
} from './styles';






// O esquema de validação está correto.
const schema = yup.object({
   name: yup.string().required('Digite o nome do produto'),
   price: yup.number().positive('Digite o preço').required().typeError('Digite o preço'),
   category: yup.object().required('Escolha uma categoria'),
   offer: yup.bool(),
   // Adiciona a validação opcional para o arquivo se um novo for selecionado
   file: yup.mixed().test('fileSize', 'O arquivo é muito grande (max 2MB)', (value) => {
      // Se o valor for a string do caminho da imagem existente, ignoramos a validação de tamanho.
      if (typeof value === 'string' && value.length > 0) return true;
      // Se um novo arquivo foi selecionado, checamos o tamanho.
      if (value && value[0]) return value[0].size <= 2000000; // 2MB
      return true; // Se nenhum novo arquivo for fornecido, também é válido.
   }).test('fileFormat', 'Formato de imagem inválido', (value) => {
      if (typeof value === 'string' && value.length > 0) return true;
      if (value && value[0]) return ['image/jpeg', 'image/png'].includes(value[0].type);
      return true;
   }),

});

export function EditProduct() {
   const [fileName, setFileName] = useState(null);
   const [categories, setCategories] = useState([]);

   const navigate = useNavigate();
   const { state: { product } } = useLocation();

   useEffect(() => {
      async function loadCategories() {
         try {
            const { data } = await api.get('/categories');
            setCategories(data);
         } catch (error) {
            // Adicionado tratamento de erro para o carregamento de categorias
            console.error("Erro ao carregar categorias:", error);
            toast.error("Não foi possível carregar as categorias.");
         }

      }
      loadCategories();
   }, []);

   const {
      register,
      handleSubmit,
      control,
      formState: { errors },
   } = useForm({
      resolver: yupResolver(schema),
      // Definindo valores padrões iniciais no useForm é mais idiomático do que no JSX
      defaultValues: {
         name: product.name,
         price: product.price / 100, // Preço em reais para o input
         category: product.category,
         offer: product.offer,
      }
   });



   const onSubmit = async (data) => {
      const productFormData = new FormData();

      // 💰 CORREÇÃO CRÍTICA: Converta o preço de volta para centavos para a API
      productFormData.append('name', data.name);
      productFormData.append('price', (data.price * 100).toFixed(0)); // Multiplica por 100 e garante que é um inteiro
      productFormData.append('category_id', data.category.id);
      productFormData.append('offer', data.offer);

      // Apenas anexa o arquivo se um novo arquivo foi selecionado no input file
      if (data.file && data.file.length > 0) {
         productFormData.append('file', data.file[0]);
      }

      try {
         await toast.promise(
            api.put(`/products/${product.id}`, productFormData),
            {
               pending: 'Editando produto',
               success: 'Produto editado com sucesso',
               error: 'Falha ao editar o produto, tente novamente',
            }
         );

         setTimeout(() => {
            navigate('/admin/produtos');
         }, 2000);

      } catch (error) {
         // Log de erro mais detalhado para o console em caso de falha na API
         console.error("Erro completo na submissão:", error.response?.data || error.message);
      }
   };

   return (
      <Container>
         <Form onSubmit={handleSubmit(onSubmit)}>
            <InputGroup>
               <Label>Nome</Label>
               {/* Default values movidos para useForm defaultValues */}
               <Input type="text" {...register("name")} />
               <ErrorMessage>{errors?.name?.message}</ErrorMessage>
            </InputGroup>

            <InputGroup>
               <Label>Preço</Label>
               {/* Default values movidos para useForm defaultValues */}
               <Input type="number" {...register("price")} step="0.01" /> {/* Adiciona step para permitir decimais no input */}
               <ErrorMessage>{errors?.price?.message}</ErrorMessage>
            </InputGroup>

            <InputGroup>
               <LabelUpload>
                  <ImageIcon />
                  <input
                     type="file"
                     accept="image/png, image/jpeg"
                     {...register("file")}
                     onChange={(e) => {
                        setFileName(e.target.files[0]?.name || null);
                        register("file").onChange(e);
                     }}
                  />
                  {/* Exibe o nome do arquivo atual, se não houver upload novo */}
                  {fileName || (product.url_imagem && 'Imagem existente') || "Upload do Produto"}
               </LabelUpload>
               <ErrorMessage>{errors?.file?.message}</ErrorMessage>
            </InputGroup>

            <InputGroup>
               <Label>Categoria</Label>
               <Controller
                  name="category"
                  control={control}
                  // defaultValue movido para useForm defaultValues
                  render={({ field }) => (
                     <Select
                        {...field}
                        options={categories}
                        getOptionLabel={(category) => category.name}
                        getOptionValue={(category) => category.id}
                        placeholder="Categorias"
                        menuPortalTarget={document.body}
                     />
                  )}
               />

               <ErrorMessage>{errors?.category?.message}</ErrorMessage>
            </InputGroup>

            <ContainerCheckBox>
               <Label>Em oferta?</Label>
               <input
                  type="checkbox"
                  {...register("offer")}
               />
            </ContainerCheckBox>



            <SubmitButton>Editar Produto</SubmitButton>
         </Form>
      </Container>
   );
}

