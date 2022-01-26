
import { useRouter } from "next/router";

export default function Docs(){
    const { query: { params = ['00']} } = useRouter();
  
   if(params.length == 2){
       return (
           <h2>Viewing docs for feature {params[0]} and concept {params[1]}</h2>
       )
   }else if(params.length === 1){
       return (
           <h2>Viewing docs for feature {params[0]}</h2>
       )
   }
   return (
       <h1>Docs Home Page { JSON.stringify(params)}</h1>
   )
}