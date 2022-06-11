export const getUsers = async (url) => {
  const response = await axios.get(
    url
  );
  const data = response.data;
  return data;
};

export const createTable = async (users) => {
  const div = document.createElement("div");
  div.classList.add("table-wrapper");
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");
  const trTitle = document.createElement("tr");

  const thName = document.createElement("th");
  const thEmail = document.createElement("th");
  const thPhone = document.createElement("th");
  const thAddress = document.createElement("th");
  const thCompany = document.createElement("th");

  thName.innerHTML = "Name";
  thEmail.innerHTML = "Email";
  thPhone.innerHTML = "Phone";
  thAddress.innerHTML = "Address";
  thCompany.innerHTML = "Company";

  trTitle.appendChild(thName);
  trTitle.appendChild(thEmail);
  trTitle.appendChild(thPhone);
  trTitle.appendChild(thAddress);
  trTitle.appendChild(thCompany);

  tbody.appendChild(trTitle);

  users.forEach((user) => {
    const tr = document.createElement("tr");

    const thName = document.createElement("th");
    const thEmail = document.createElement("th");
    const thPhone = document.createElement("th");
    const thAddress = document.createElement("th");
    const thCompany = document.createElement("th");

    const tdName = document.createElement("td");
    const tdEmail = document.createElement("td");
    const tdPhone = document.createElement("td");
    const tdAddress = document.createElement("td");
    const tdCompany = document.createElement("td");

    thName.innerHTML = "Name";
    thEmail.innerHTML = "Email";
    thPhone.innerHTML = "Phone";
    thAddress.innerHTML = "Address";
    thCompany.innerHTML = "Company";

    tdName.innerHTML = user.name;
    tdEmail.innerHTML = user.email;
    tdPhone.innerHTML = user.phone;
    tdAddress.innerHTML =
      user.address.street +
      ", " +
      user.address.city +
      ", " +
      user.address.zipcode;
    tdCompany.innerHTML = user.company.name;
    tr.appendChild(tdName);
    tr.appendChild(tdEmail);
    tr.appendChild(tdPhone);
    tr.appendChild(tdAddress);
    tr.appendChild(tdCompany);

    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  div.appendChild(table);
  return div;
};

export const createLoader = () => {
  const loaderWrapper = document.createElement("div");
  const loader = document.createElement("div");
  loader.classList.add("lds-circle");
  loader.innerHTML = `<div></div>`;
  loaderWrapper.classList.add("loader-wrapper");
  loaderWrapper.appendChild(loader);
  return loaderWrapper;
};
