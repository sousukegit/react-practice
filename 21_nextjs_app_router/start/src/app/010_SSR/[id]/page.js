import { ENDPOINT } from '@/constants'
import Article from '@/components/article'

export async function generateMetadata({ params }) {
    const article = await fetch(`${ENDPOINT}/${params.id}`,{
        next:{revalidate:5}
    }).then(res =>res.json())

    return {
      title: article.title,
      description: article.text
    }
  }

export default async function SSR({params}) {
    console.log(params)
    const article = await fetch(`${ENDPOINT}/${params.id}`,{
        next:{revalidate:5}
    }).then(res =>res.json())
    return (
        <>
            <div>SSR</div>
            <Article data={article}></Article>
           
        </>
    )
}