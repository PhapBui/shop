import { useEffect, useState } from "react";
import Select from "react-select";
import locationApi from "../../api/locationApi.js";

import { Provice } from "../../constants/directory/index.js";

function Directory() {
  const [provice, setProvice] = useState([]);

  const [disctrict, setDisctrict] = useState([]);
  const [disctrictValue, setDisctrictValue] = useState([]);

  const [wards, setWards] = useState([]);
  const [wardsValue, setWardsValue] = useState([]);

  const createSelectorOption = (array) => {
    if (!array) return;
    const selectorOption = array.map((a) => {
      const provideOpt = {};
      provideOpt.value = a.id;
      provideOpt.label = a.name;
      return provideOpt;
    });
    return selectorOption;
  };

  const proviceSelector = createSelectorOption(Provice);

  useEffect(() => {
    // @ts-ignore
    if (provice.value) {
      const fetchDistrict = async () => {
        try {
          // @ts-ignore
          let res = await locationApi.getDistrict(provice.value);
          setDisctrict(createSelectorOption(res.data));
        } catch (error) {
          console.log("Fetch district error: ", error);
        }
      };
      fetchDistrict();
    }
  }, [provice]);

  useEffect(() => {
    // @ts-ignore
    if (disctrictValue.value) {
      const fetchWard = async () => {
        try {
          // @ts-ignore
          let res = await locationApi["getWard"](disctrictValue.value);
          setWards(createSelectorOption(res.data));
        } catch (error) {
          console.log("Fetch ward error: ", error);
        }
      };
      fetchWard();
    }
  }, [provice, disctrictValue]);

  const handleChange = async (e) => {
    setProvice(e);
    setDisctrictValue([]);
    setWards([]);
    setWardsValue([]);
  };

  const handleChangeDistrict = async (e) => {
    setDisctrictValue(e);
    setWardsValue([]);
  };
  const handleOnChangeWards = (e) => {
    setWardsValue(e);
  };
  return (
    <div className="directory">
      <Select
        value={provice}
        name="provice"
        onChange={(e) => handleChange(e)}
        options={proviceSelector}
      />
      <Select
        value={disctrictValue}
        name="district"
        onChange={(e) => handleChangeDistrict(e)}
        options={disctrict}
      />
      <Select
        value={wardsValue}
        name="ward"
        onChange={(e) => handleOnChangeWards(e)}
        options={wards}
      />
    </div>
  );
}

export default Directory;
