
import Proptypes from "prop-types";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const ToDo = ({service}) => {
    console.log(service);
    const axiosSecure = useAxiosSecure();
    const handleStatus = e => {
        const status = e.target.value;
        console.log(status, service._id);
        axiosSecure.patch(`/service/status/${service._id}?status=${status}`, {})
        .then(res => {
            console.log(res.data);
            if (res.data.modifiedCount > 0) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Status updated',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
  return (
    <>
      <tbody>
        {/* row 1 */}
        <tr>
          <th>
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={service.img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </th>
          <td>
            <div className="flex items-center gap-3">
              <div>
                <div className="font-bold">{service.name}</div>
                <div className="text-sm opacity-50">United States</div>
              </div>
            </div>
          </td>
          <td>{service.date}</td>
          <select
            onChange={handleStatus}
            defaultValue={service.status}
            className="select select-info w-full max-w-xs mt-4 flex justify-center items-center"
          >
            <option>pending</option>
            <option>working</option>
            <option>completed</option>
          </select>
        </tr>
      </tbody>
    </>
    // <div>

    // </div>
  );
};

ToDo.propTypes = {
  service: Proptypes.object,
};
export default ToDo;
