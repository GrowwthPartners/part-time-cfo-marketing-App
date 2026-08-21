export type ContactFormPayload = {
  name: FormDataEntryValue | null
  companyName: FormDataEntryValue | null
  email: FormDataEntryValue | null
  phoneNumber: FormDataEntryValue | null
  serviceLookingFor: string | 'new prtcfo page';
  message: FormDataEntryValue | null
}

const contactApiBaseUrl =  import.meta.env.VITE_CONTACTAPI_DEVURL || import.meta.env.VITE_CONTACTAPI_PRODURL;

// const contactApiBaseUrl = import.meta.env.VITE_CONTACTAPI_LOCAL;

const getContactEndpoint = `${contactApiBaseUrl}/api/contact-growwth`

export async function submitContactForm(payload: ContactFormPayload) {
  const response = await fetch(getContactEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: payload }),
  })
  
  if (!response.ok) {
    throw new Error('Failed to submit contact form')
  }
}
