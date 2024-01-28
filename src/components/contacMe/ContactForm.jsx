import { useForm, ValidationError } from '@formspree/react';

import Input from './Input';


function ContactForm() {

  const [state, handleSubmit] = useForm("xgegvkag");
  if (state.succeeded) {
      return <p 
        className='text-center text-[18px]'
      >Gracias por contactarme!</p>;
  }
  return (
      <form 
        onSubmit={handleSubmit} 
        className='flex flex-col justify-center items-center'
      >

      <Input
        id="name"
        type="text" 
        name="name"
        plceholder="Nombre"
      />
      <ValidationError 
        prefix="name" 
        field="email"
        errors={state.errors}
      />

      <Input
        id="email"
        type="email" 
        name="email"
        plceholder="Correo"  
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />

      <textarea
        id="message"
        name="message"
        placeholder="Asunto"
        className='w-11/12 sm:w-8/12 my-4 focus:outline-[#7E00DE] pl-1 text-black focus:outline-none rounded-sm'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />

      <button 
        type="submit" 
        disabled={state.submitting}
        className='bg-[#7E00DE] p-1 w-32 my-6 rounded-sm text-white text-[18px]'
      >
        Enviar
      </button>

    </form>
  );
}

export default ContactForm;

