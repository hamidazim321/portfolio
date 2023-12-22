const public_id = import.meta.env.VITE_PUBLIC_KEY
const service_id = import.meta.env.VITE_SERVICE_ID
export const template_id = import.meta.env.VITE_TEMPLATE_ID

export const sendEmail = async(form) => {
  const formData = new FormData(form)
  formData.append('service_id', service_id);
  formData.append('template_id', template_id);
  formData.append('user_id', public_id);
  let status;

  try {
    const email = await fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
    method: 'POST',
    body: formData,
    contentType: false,
    processData: false 
  })
  status = 200
  }catch (error) {
    console.error(error)
    status = 'fail'
  }
  return status
}
