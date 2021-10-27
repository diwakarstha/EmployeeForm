import React from "react";
import Input from "./common/input";

class EmployeeForm extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* Employee Form Card Start */}
        <div
          class="
                    shadow
                    mt-5
                    py-2
                    px-5
                    mx-auto
                    justify-content-center
                    bg-light
                    col-xl-5 col-lg-6 col-md-7 col-sm-8 col-12
                  "
        >
          {/* Employee Form Title  */}
          <div class="mt-3">
            <h5 class="text-center">
              <strong>Employee Form</strong>
            </h5>
          </div>

          {/* Employee Form Start  */}
          <form class="mt-3">
            {/* Firstname */}
            <Input type="text" name="firstname" label="Firstname" />

            {/* Lastname */}
            <Input type="text" name="lastname" label="Lastname" />

            {/* Gender */}
            <div class="form-group mt-2">
              <div class="row">
                <div class="col">
                  <label htmlFor="gender">
                    Gender: <i class="text-danger">*</i>
                  </label>
                </div>
                <div class="col">
                  <div class="row">
                    <div class="col-lg d-lg-flex justify-content-lg-center">
                      <div class="my-auto">
                        <input
                          type="radio"
                          name="gender"
                          id="male"
                          value="male"
                          checked
                        />
                        <label for="male">male</label>
                      </div>
                    </div>
                    <div class="col-lg d-lg-flex justify-content-lg-center">
                      <div class="my-auto">
                        <input
                          class=""
                          type="radio"
                          name="gender"
                          id="female"
                          value="female"
                        />
                        <label for="female">female</label>
                      </div>
                    </div>
                    <div class="col-lg d-lg-flex justify-content-lg-center">
                      <div class="my-auto">
                        <input
                          class=""
                          type="radio"
                          name="gender"
                          id="other"
                          value="other"
                        />
                        <label for="other">other</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Email */}
            <Input type="email" name="email" label="Email" />

            {/* Country */}
            <div class="form-group mt-2">
              <div class="row">
                <div class="col">
                  <label for="country">
                    Country: <i class="text-danger">*</i>
                  </label>
                </div>
                <div class="col">
                  <select
                    name="country"
                    id="country"
                    class="form-control"
                    required
                  >
                    <option value="">Select country</option>
                    <option value="nepal">Nepal</option>
                    <option value="usa">United State</option>
                    <option value="canada">Canada</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Designation */}
            <div class="form-group mt-2">
              <div class="row">
                <div class="col">
                  <label for="designation">
                    Designation: <i class="text-danger">*</i>
                  </label>
                </div>
                <div class="col">
                  <select
                    name="designation"
                    id="designation"
                    class="form-control"
                    required
                  >
                    <option value="">Select degsignation</option>
                    <option value="ceo">CEO</option>
                    <option value="se">Software Engineer</option>
                    <option value="jd">Junior Developer</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Start Date */}
            <div class="form-group mt-2">
              <div class="row">
                <div class="col">
                  <label for="date">
                    Start-date: <i class="text-danger">*</i>
                  </label>
                </div>
                <div class="col">
                  <input
                    name="date"
                    id="date"
                    type="date"
                    class="form-control"
                    required
                  />
                </div>
              </div>
            </div>

            <button class="my-2 btn btn-primary" type="submit">
              Submit
            </button>
          </form>
          {/* Employee Form Card End */}
        </div>
        {/* Employee Form Card End  */}
      </React.Fragment>
    );
  }
}

export default EmployeeForm;
