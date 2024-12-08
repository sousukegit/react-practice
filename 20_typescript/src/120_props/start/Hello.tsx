type aisatuProps ={
    text:{
        japan:string
    },
    children?:React.ReactNode
}

type fnProps = {
    func:(text:string)=>void
}

const Hello:React.FC<aisatuProps> = (props)=>{
    return(
        <>
            <div>{props.text.japan}</div>
            <div>{props.children}</div>
        </>
    )
}

const Btn: React.FC<fnProps> = (props) => {
    return(
        <>
            <button onClick={()=>{props.func("aaaaa")}}>btn</button>
        </>
    )
}

export default {Hello,Btn}