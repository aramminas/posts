import { useCallback, useContext, useState } from "react";
import { Modal } from "../modal";
import { PostItem } from "../post-item";
import { usePosts } from "../../hooks/usePosts";
import { ResponseDataView } from "../response-data-view";
import { SearchContext } from "../../context/searchContext";
import "./styles.css";

export const PostList = () => {
  const [isOpen, setOpen] = useState(false);
  const [seletecPost, setSeletecPost] = useState(null);
  const { search } = useContext(SearchContext);
  const { data, loading, error } = usePosts();
  const postsData = (data || [])?.filter((post) => {
    const regExp = new RegExp(search, "gi");
    if (post.title.search(regExp) !== -1 || post.text.search(regExp) !== -1) {
      return post;
    }
  });

  const handleSelectPost = useCallback(
    (title) => {
      const post = postsData?.find((item) => item.title === title);
      setSeletecPost(post ? post : null);
      setOpen(!!post);
    },
    [postsData]
  );

  const handleClose = useCallback(() => {
    setSeletecPost(null);
    setOpen(false);
  }, []);

  return (
    <section className="posts-section">
      <ResponseDataView error={error} loading={loading} data={postsData}>
        <div className="cart-list">
          {(postsData || []).map((post) => {
            return (
              <PostItem
                key={`${post.autor}-${post.title}`}
                post={post}
                onSelect={handleSelectPost}
              />
            );
          })}
        </div>
      </ResponseDataView>
      <Modal post={seletecPost} open={isOpen} handleClose={handleClose} />
    </section>
  );
};
