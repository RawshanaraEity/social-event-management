import { CiLocationOn } from "react-icons/ci";
import {FiPhone} from "react-icons/fi";
import {BiTimeFive} from "react-icons/bi";
import {PiNotePencilDuotone} from "react-icons/pi"

const Contact = () => {
  return (
    <div className="bg-gray-50">
      <h2 className="text-6xl text-center font-bold  pt-14">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-20 px-5">
        <div className="card bg-base-100 shadow-xl">
          <p className="text-4xl text-red-500 flex justify-center mt-8">
            <CiLocationOn></CiLocationOn>
          </p>
          <div className="card-body">
            <h2 className=" text-center font-semibold text-2xl">
              Postal Address
            </h2>
            <div className=" justify-end text-center mt-5 text-gray-400 font-semibold text-lg">
              <p>Unica Event Agency</p>
              <p>85 Fentiman Ave</p>
              <p>Ottawa, ON K1S 0T7</p>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <p className="text-4xl text-red-500 flex justify-center mt-8">
            <FiPhone></FiPhone>
          </p>
          <div className="card-body">
            <h2 className="text-center font-semibold text-2xl">
              Phone & E-mail
            </h2>

            <div className=" justify-end mt-5 text-gray-400 font-semibold text-lg">
              <p>Phone: 1-800-64-38</p>
              <p>Fax: 1-800-64-39</p>
              <p>office@fable.com</p>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <p className="text-4xl text-red-500 flex justify-center mt-8">
            <BiTimeFive></BiTimeFive>
          </p>
          <div className="card-body">
            <h2 className="text-center font-semibold text-2xl">Open Hours</h2>

            <div className=" justify-end mt-5 text-gray-400 font-semibold text-lg">
              <p>Monday to Friday</p>
              <p>8.00 am to 5.00 pm</p>
              <p>Weekend Closed</p>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <p className="text-4xl text-red-500 flex justify-center mt-8">
            <PiNotePencilDuotone></PiNotePencilDuotone>
          </p>
          <div className="card-body">
            <h2 className="text-center font-semibold text-2xl">Sessions</h2>
            <div className=" justify-end mt-5 text-gray-400 font-semibold text-lg">
              <p>Mornings,8 am to 12 noon</p>
              <p>Afternoons,1 pm to 5 pm</p>
              <p>Full Day,8 am to 5 pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
