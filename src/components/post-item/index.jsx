import "./styles.css";

export const PostItem = ({ post, onSelect }) => {
  return (
    <div className="cart" onClick={() => onSelect(post.title)}>
      <img
        src={post.img_2x}
        srcSet={`${post.img} 600w,${post.img} 768w,${post.img_2x} 1280w`}
        sizes="(max-width: 600px) 600px, (max-width: 768px) 768px, 1280px"
        alt={post.title}
      />
      <div className="cart-info-section">
        <p className="cart-tag">{post.tags}</p>
        <p className="cart-title">{post.title}</p>
        <div className="cart-info-block">
          <span className="cart-autor">{post.autor}</span>
          <span>{post.date}</span>
          <span>{post.views}</span>
        </div>
        <p>{post.text}</p>
      </div>
    </div>
  );
};
