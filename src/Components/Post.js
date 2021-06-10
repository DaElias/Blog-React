import { React } from 'react';
import posts from '../data/Post';
import styled from 'styled-components';
import { useParams, Redirect } from 'react-router-dom';

const Post = (props) => {
    const { id } = useParams();
    //console.log(props);
    //console.log(id);
    //console.log(posts[id-1].text);

    return (
        <>
            {posts[id - 1] ?

                <div>
                    <h1>{posts[id - 1].titulo}</h1>
                    <p>{posts[id - 1].text}</p>
                </div>
                :
                <DivImagen>

                    <h1>El post no existe</h1>
                    <img width="260px" src="https://soyunperro.com/wp-content/uploads/2017/08/perro-llora.jpg"></img>
                    <p>:c</p>
                    {/* <Redirect to="/" /> */}
                </DivImagen>
            }

        </>
    )
};

const DivImagen = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;


export default Post;