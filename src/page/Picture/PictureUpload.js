import PictureUploadPage from "../../components/PictureUploadPage";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function PictureUpload() {
  return (
    <div className="max-w-4xl mx-auto my-4">
      <Header />
      <div className="max-w-4xl mx-auto my-4">
        <PictureUploadPage />
      </div>
      <Footer />
    </div>
  );
}
export default PictureUpload;
