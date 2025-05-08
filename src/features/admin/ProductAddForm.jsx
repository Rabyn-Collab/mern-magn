import { Button, Input, Option, Select, Textarea, } from '@material-tailwind/react'
import { Formik } from 'formik'
import React from 'react'
import { useAddProductMutation } from '../products/productApi';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';


export default function ProductAddForm() {

  const [addProduct, { isLoading }] = useAddProductMutation();
  const { user } = useSelector((state) => state.userSlice);

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
            await addProduct({
              body: formData,
              token: user.token
            }).unwrap();
            toast.success('successfully added');
          } catch (err) {
            toast.error(err.data?.message || err.data)
          }


        }}
      >
        {({ handleSubmit, handleChange, touched, values, setFieldValue }) => (
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
              <Select
                onChange={(e) => setFieldValue('category', e)}
                label="Select Category">
                <Option value="men's clothing">Men's Clothing</Option>
                <Option value="women's clothing">Women's Clothing</Option>
                <Option value="jewelery">Jewelery</Option>
                <Option value="electronics">Electronics</Option>

              </Select>
            </div>
            <div >
              <Select
                onChange={(e) => setFieldValue('brand', e)}
                label="Select Brand">
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
                onChange={(e) => {
                  const file = e.target.files[0];
                  setFieldValue('image', file);
                }}
                name='image'
                type='file'
              />
            </div>




            <Button loading={isLoading} type='submit'>Submit</Button>


          </form>
        )}
      </Formik>



    </div>
  )
}
