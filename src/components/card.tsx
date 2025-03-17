// export default function card() {
//     const image = " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-5Ei0F_j0MnzOfLg0x-GqTVcgss3x_yogXw&s";
//     const title = "Tân nguyễn";
//     const content = "abcxyz";
//     const contentButton = "click here";
//     return (
//       <>
//         <div className="card" style={{ width: "18rem" }}>
//           <img src={image} className="card-img-top" alt="..." />
//           <div className="card-body">
//             <h5 className="card-title">{title}</h5>
//             <p className="card-text">
//               {content}
//             </p>
//             <a href="#" className="btn btn-primary">
//               {contentButton}
//             </a>
//           </div>
//         </div>
//       </>
//     );
//   }

export default function card(props: {
  image: string;
  title: string;
  content: string;
  contentButton: string;
}) {
  const { image, title, content, contentButton } = props;
  //  image = " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-5Ei0F_j0MnzOfLg0x-GqTVcgss3x_yogXw&s";
  //  title = "Tân nguyễn";
  //  content = "abcxyz";
  //  contentButton = "click here";
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>
          <a href="#" className="btn btn-primary">
            {contentButton}
          </a>
        </div>
      </div>
    </>
  );
}
