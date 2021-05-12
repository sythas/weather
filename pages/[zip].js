import React from "react";

export default ({ zip }) => <p>Hello {zip}</p>;

export const getServerSideProps = async (context) => {
  return {
    props: { zip: context.params.zip },
  };
};
