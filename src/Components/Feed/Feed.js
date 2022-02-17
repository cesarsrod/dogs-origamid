import React from "react";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";

const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [pages, setPages] = React.useState([1]);

  React.useEffect(() => {
    function infiniteScroll(event) {
      const scroll = window.scrollY;
      const height = document.body.offsetHeight - window.innerHeight;
      console.log(scroll);
      console.log(height);
      // setPages((pages) => [...pages, pages.length + 1]);
      console.log(event);
    }
    window.addEventListener("wheel", infiniteScroll);
    window.addEventListener("scroll", infiniteScroll);
    return () => {
      window.addEventListener("wheel", infiniteScroll);
      window.addEventListener("scroll", infiniteScroll);
    };
  }, []);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {pages.map((page) => (
        <FeedPhotos
          key={page}
          user={user}
          page={page}
          setModalPhoto={setModalPhoto}
        />
      ))}
    </div>
  );
};

export default Feed;
