import { useRef, useState } from "react";
import PencilIcon from "@/components/theme2/ImageCropper/PencilIcon";
import { FaCamera, FaCopy } from "react-icons/fa";
import Modal from "@/components/theme2/ImageCropper/Modal";

const Profile = () => {
  const avatarUrl = useRef(
    "https://avatarfiles.alphacoders.com/161/161002.jpg"
  );
  const [modalOpen, setModalOpen] = useState(false);

  const updateAvatar = (imgSrc) => {
    avatarUrl.current = imgSrc;
  };

  return (
    <div className="flex flex-col items-center pt-12">
      <div className="relative">
        <img
          src={avatarUrl.current}
          alt="Avatar"
          className="w-[200px] h-[200px] rounded-full border-2 ml-2 border-gray-400"
        />
        {/* <button
          className="absolute -bottom-3 left-0 right-0 m-auto w-fit p-[.35rem] rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-600"
          title="Change photo"
          onClick={() => setModalOpen(true)}
        >
        </button> */}
        <button onClick={() => setModalOpen(true)} className="mt-4 flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
        <FaCamera className="mr-2" />
        Change Profile Image
      </button>
      </div>

      {modalOpen && (
        <Modal
          updateAvatar={updateAvatar}
          closeModal={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Profile;
