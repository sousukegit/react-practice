"use server"

import { ENDPOINT } from "@/constants";

export async function createItem(formData) {
  const id = formData.get('id')
  const title = formData.get('title')

  try {
    const res = await fetch(ENDPOINT,{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({id,title})
        })
        const data = await res.json();
        return data;
  } catch (error) {
    return error
  }
  
}
