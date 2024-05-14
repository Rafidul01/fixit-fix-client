const FAQs = () => {
  return (
    <div className="container mx-auto border border-[#74C138] rounded-2xl mt-16 font-poppins mb-16">
      <h1 className="text-center font-bold text-2xl mt-16 mb-8 ">FAQ&apos;s</h1>
      <div className="flex flex-col md:flex-row  justify-center items-center p-8  gap-4">
        <div className="md:w-1/2">
          <img
            src="https://i.ibb.co/nwL4BHB/imgbin-computer-repair-technician-technology-mobile-phones-desktop-computers-nerds-on-call-computer.png"
            alt=""
          />
        </div>
        <div className="md:w-1/2 space-y-6">
          {/* q1 */}
          <div>
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 text-white bg-[#74C138]"
            >
              <div className="collapse-title text-xl font-medium">
                Q: How long does a typical repair take?
              </div>
              <div className="collapse-content">
                <p>
                  A: The time it takes to repair a device can vary depending on
                  the nature of the issue. However, we strive to provide fast
                  turnaround times and aim to have your device repaired as
                  quickly as possible.
                </p>
              </div>
            </div>
          </div>
          {/* q2 */}
          <div>
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 text-white bg-[#74C138] "
            >
              <div className="collapse-title text-xl font-medium">
                Q: Do you use genuine parts for repairs?
              </div>
              <div className="collapse-content">
                <p>
                  A: Yes, we use high-quality, genuine parts for all our repairs
                  to ensure the best possible performance and longevity for your
                  devices.
                </p>
              </div>
            </div>
          </div>
          {/* q3 */}
          <div>
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 text-white bg-[#74C138] "
            >
              <div className="collapse-title text-xl font-medium">
                Q: What happens if my device isn not repairable?
              </div>
              <div className="collapse-content">
                <p>
                  A: In the rare event that we are unable to repair your device,
                  you won not be charged for the repair attempt. We will also
                  provide guidance on alternative options, such as device
                  replacement or recycling.
                </p>
              </div>
            </div>
          </div>
          {/* q4 */}
          <div>
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 text-white bg-[#74C138] "
            >
              <div className="collapse-title text-xl font-medium">
                Q: Is there a warranty on repairs?
              </div>
              <div className="collapse-content">
                <p>
                  A: Yes, we stand behind our work with a warranty on parts and
                  labor for all repairs. Please speak with one of our
                  technicians for more information about our warranty policy.
                </p>
              </div>
            </div>
          </div>
          {/* q5 */}
          <div>
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 text-white bg-[#74C138] "
            >
              <div className="collapse-title text-xl font-medium">
                Q: How much will the repair cost?
              </div>
              <div className="collapse-content">
                <p>
                  A: The cost of repair can vary depending on the type of device
                  and the extent of the damage. We offer transparent pricing,
                  and our technicians will provide you with an estimate before
                  proceeding with the repair. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
