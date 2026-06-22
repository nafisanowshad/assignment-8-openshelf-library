import Image from "next/image";

const page = () => {
  return (
    <div className="min-h-screen py-14 space-y-10 flex flex-col items-center justify-center">
      <div>
        <Image
          src="/path/to/user/image.jpg"
          alt="User Image"
          width={300}
          height={400}
        />
      </div>
      <div>
        <h2>name </h2>
        <p>mail </p>
        <p>Member since: January 2026</p>
        <h3>Borrowed Books:</h3>
      </div>

      <div className="flex ">
        <button className="px-4 py-2 bg-emerald-500 text-white rounded">
          Update Profile
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default page;