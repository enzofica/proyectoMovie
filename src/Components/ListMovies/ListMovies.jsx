import { List, Avatar, Button } from 'antd';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import "./ListMovies.scss"
import {PlayCircleOutlined} from "@ant-design/icons"


export default function ListMovies(props) {
  const {movies} = props 

  if (movies.loading || !movies.results) {
    return <Loading />;  
  }

  const results = movies.results  

return (
  <div className = "listMovies" >
  <List
    itemLayout="horizontal"
    dataSource={results}
    renderItem={(movie) => 
      <RenderMovie movie={movie} />
    }
  />
  </div>
);

}

 function RenderMovie(props) {
     const {
         movie: {id, title, backdrop_path},
     } = props;
     return(
         <List.Item className="listMovies" title={title}>
         <List.Item.Meta
           avatar={<Avatar src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} />}
           title={  <Link to ={`/movie/${id}`}> <p>{title}</p></Link>   }
           
         />
         <Link to={`/movie/${id}`}>
             <Button type="primary" shape="circle">
             <PlayCircleOutlined />
             </Button>
         </Link>
       </List.Item> 
     );
 }

