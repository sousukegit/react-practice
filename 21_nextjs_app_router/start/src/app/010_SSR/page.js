
import './lib'
import ClientComp from "./components/ClientComp"
import { ENDPOINT } from '@/constants'
import ArticleList from '@/components/articleList'

export default async function SSR() {

    const article = await fetch(ENDPOINT,{
        next:{revalidate:5}
    }).then(res =>res.json())
    return (
        <>
            <div>SSR</div>
            <ClientComp></ClientComp>
            <ArticleList list={article} basePath= "/010_SSR"></ArticleList>
        </>
    )
}