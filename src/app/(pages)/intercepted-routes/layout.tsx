

// export default function layout({children,modal}:{
//     children:React.ReactNode;
//     modal:React.ReactNode;

// }){
// return(
//     <>
//     {modal}
//     {children}
//     </>
// )
// }




export default function Layout(props: {
    modal: React.ReactNode;
    children: React.ReactNode;
  }) {
    return (
      <>
        {props.modal}
        {props.children}
      </>
    );
  }