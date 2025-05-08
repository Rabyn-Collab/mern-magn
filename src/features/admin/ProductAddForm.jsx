import { Button, Input, Option, Select, Textarea, } from '@material-tailwind/react'
import { Formik } from 'formik'
import React from 'react'
import { useAddProductMutation } from '../products/productApi';
import toast from 'react-hot-toast';


export default function ProductAddForm() {

  const [addProduct, { isLoading }] = useAddProductMutation();

  return (
    <div className='max-w-[400px] mt-10'>

      <Formik
        initialValues={{
          title: '',
          description: '',
          price: '',
          image: '',
          category: '',
          brand: '',

        }}
        onSubmit={async (val) => {
          const formData = new FormData();
          formData.append('title', val.title);
          formData.append('description', val.description);
          formData.append('price', Number(val.price));
          formData.append('image', val.image);
          formData.append('category', val.category);
          formData.append('brand', val.brand);
          try {
            await addProduct(formData).unwrap();
            toast.success('successfully added');
          } catch (err) {
            toast.error(err.data?.message || err.data)
          }


        }}
      >
        {({ handleSubmit, handleChange, touched, values, }) => (
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <Input
                onChange={handleChange}
                value={values.title}
                label='Title'
                name='title' />
            </div>
            <div>
              <Input
                onChange={handleChange}
                value={values.price}
                label='Price'
                name='price' />
            </div>


            <div>
              <Select label="Select Category">
                <Option value="men's clothing">Men's Clothing</Option>
                <Option value="women's clothing">Women's Clothing</Option>
                <Option value="jewelery">Jewelery</Option>
                <Option value="electronics">Electronics</Option>

              </Select>
            </div>
            <div >
              <Select label="Select Brand">
                <Option value='Apple'>Apple</Option>
                <Option value='Samsung'>Samsung</Option>
                <Option value='Addidas'> Addidas</Option>
                <Option value='Google'>Google</Option>
                <Option value='Tanishq'>Tanishq</Option>
              </Select>
            </div>

            <Textarea
              onChange={handleChange}
              value={values.description}
              label='Description'
              name='description' />

            <div>
              <Input
                label='Image'
                onChange={handleChange}
                name='image'
                type='file'
              />
            </div>




            <Button type='submit'>Submit</Button>


          </form>
        )}
      </Formik>



    </div>
  )
}
