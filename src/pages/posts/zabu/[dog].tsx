import { GetServerSideProps } from "next"

interface DogProps {
    params: {
        dog: string;
    }  
    dog: string;
}


export default function Dogg({ dog } : DogProps) {
    return (
        <>
        <h1>Im DOgggggggggggggggggg</h1>
        <h2>Dog Props: {dog}</h2>
        </>
        
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { dog } = params;
    console.log(params)

    return {
        props: {
            params,
            dog
        }
    };
}