import "./styles.css";

export const Modal = ({ post, open, handleClose }) => {
  const handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  if (!post) {
    return null;
  }

  return (
    <div className={`modal ${open ? "show" : ""}`} onClick={handleClose}>
      <div className="modal-content" onClick={handleClick}>
        <div className="modal-header">
          <span className="close" onClick={handleClose}>
            &times;
          </span>
          <h2>{post?.title}</h2>
        </div>
        <div className="modal-body">
          <div className="modal-body-content">
            <img
              src={post.img_2x}
              srcSet={`${post.img} 600w,${post.img} 768w,${post.img_2x} 1280w`}
              sizes="(max-width: 600px) 600px, (max-width: 768px) 768px, 1280px"
              alt={post.title}
            />
            <div>
              <p className="post-tag">{post.tags}</p>

              <div className="post-info-block">
                <p>
                  Author: <span>{post.autor}</span>
                </p>
                <p>
                  Date: <span>{post.date}</span>
                </p>
                <p>
                  Views: <span>{post.views}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <h3>{post?.text}</h3>
        </div>
      </div>
    </div>
  );
};
