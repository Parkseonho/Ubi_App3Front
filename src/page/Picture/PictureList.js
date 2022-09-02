import PictureListPage from "../../components/PictureListPage";
import React from "react";
import Footer from "../../components/Footer";

function PictureList() {
  return (
    <div className="max-w-4xl mx-auto my-4">
      <div className="max-w-4xl mx-auto my-4">
        <PictureListPage />
      </div>
      <Footer />
    </div>
  );
}
export default PictureList;
