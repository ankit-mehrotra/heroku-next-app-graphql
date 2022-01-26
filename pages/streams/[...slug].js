import { gql } from '@apollo/client'
import React from 'react'
import client from '../../apollo-client'
import Image from 'next/image';

const StreamPage = ({ streams}) => {
    return (
        <div>
            <h1>{streams.title}</h1>
            
            <Image
                loader={myLoader}
                src={streams.coverImage.url} 
                alt={`${streams.title} Cover Image`} 
                width={500}
                height={500}
                />
            <div dangerouslySetInnerHTML={{__html: streams.description.html}}/>
        </div>
    )
}


export const getStaticPaths = async () => {
    const { data } = await client.query({
        query: gql`
          query {
              streams{
                  slugDesc
              }
          } 
        `
    });
    
    const { streams } = data;
    const paths = streams.map(stream => ({
        params: { slug: [stream.slugDesc]}
    }));
    return {paths, fallback: false}
}

export async function getStaticProps({ params }) {
    const slug = params.slug[0];
    const { data } = await client.query({
        query: gql`
          query getStreams($slug: String!){
              streams(where: {slugDesc: $slug}){
                title
                slugDesc
                streamDate
                coverImage{
                  url
                }
                guestName
                description{
                  raw
                  html
                }
              }
          }
        `,
        variables: { slug }
    })
     return {
         props: {
             streams: data.streams[0]
         }
     }
}
export default StreamPage
