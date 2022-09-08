import PictureListPage from "../../components/PicturePage/PictureListPage";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";


function PictureList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    /**API 호출 코드*/
    const getData = async () => {
      const posts = await axios({
        url: "http://localhost:8083/multi-file",
        method: "GET",
      });
      setPosts(posts.data);
    };
  
    getData();
  }, []);
  const nextId = useRef(4);
  return (
    <div className="max-w-4xl mx-auto my-4 MarginBottom">
      <div className="max-w-4xl mx-auto my-4">
        <PictureListPage posts={posts} setPosts={setPosts}/>
      </div>
    </div>
  );
}
export default PictureList;
