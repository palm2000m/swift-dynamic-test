import "./Test3.css";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Select,
  Space,
  DatePicker,
  Radio,
  Table,
} from "antd";
import { useEffect, useState } from "react";
import moment from 'moment';

export default function Test3() {
  const [prefix, setPrefix] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [calender, setCalender] = useState([]);
  const [nationality, setNationality] = useState("");
  const [id, setId] = useState({
    part1: "",
    part2: "",
    part3: "",
    part4: "",
    part5: "",
  });
  const [gender, setGender] = useState("");
  const [dialingCode, setDialingCode] = useState("");
  const [phone, setPhone] = useState("");
  const [passport, setPassport] = useState("");
  const [salary, setSalary] = useState("");
  const [form] = Form.useForm();
  const [task, setTask] = useState(
    JSON.parse(localStorage.getItem("task")) || []
  );
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [selectAll, setSelectAll] = useState(false);
  const [btnChangeName, setBtnChangeName] = useState("ส่งข้อมูล");
  const [btnCancel, setBtnCancel] = useState("ล้างข้อมูล");
  const [idNum, setIdNum] = useState(1);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
    // eslint-disable-next-line
  }, [task]);

  const onReset = () => {
    if(btnCancel === "ล้างข้อมูล"){
      form.resetFields();
      clearData();
    }else{
      onSave()
    }
  };

  const handleInputChange = (part, value) => {
    setId((prevId) => ({ ...prevId, [part]: value }));
    console.log(id);
  };

  const clearData = () => {
    setPrefix("");
    setFirstName("");
    setLastName("");
    setCalender([""]);
    setNationality("");
    setId({
      part1: "",
      part2: "",
      part3: "",
      part4: "",
      part5: "",
    });
    setGender("");
    setDialingCode("");
    setPhone("");
    setPassport("");
    setSalary("");
  };

  const onSave = () => {
    const newTask = {
      prefix,
      firstName,
      lastName,
      calender,
      nationality,
      id,
      gender,
      dialingCode,
      phone,
      passport,
      salary,
    };
    if (editIndex !== -1) {
      const updatedTask = { ...task };
      updatedTask[editIndex] = newTask;
      // setTask(updatedTask);
      setEditIndex(-1);
    } else {
      setTask([...task, newTask]);
    }
    // setTask([...task, newTask]);
    setIdNum(1)
    console.log(task);
    form.resetFields();
    clearData();
    setBtnChangeName("ส่งข้อมูล");
    setBtnCancel("ล้างข้อมูล")
  };

  const columns = [
    {
      title: "ชื่อ",
      dataIndex: "name",
      sorter: {
        compare: (a, b) => a.name.localeCompare(b.name),
      },
    },
    {
      title: "เพศ",
      dataIndex: "gender",
      sorter: {
        compare: (a, b) => a.gender.localeCompare(b.gender),
      },
    },
    {
      title: "หมายเลขโทรศัพท์",
      dataIndex: "phone",
      sorter: {
        compare: (a, b) => a.phone.localeCompare(b.phone),
      },
    },
    {
      title: "สัญชาติ",
      dataIndex: "nationality",
      sorter: {
        compare: (a, b) => a.nationality.localeCompare(b.nationality),
      },
    },
    {
      title: "จัดการ",
      dataIndex: "manage",
    },
  ];

  const data = task.map((item, index) => ({

    key: index.toString(),
    name: `${item.firstName}`,
    gender: `${item.gender}`,
    phone: `${item.dialingCode} ${item.phone}`,
    nationality: `${item.nationality}`,
    manage: (
      <Button
        onClick={() => {
          setIdNum(0);
          setBtnChangeName("บันทึก");
          setBtnCancel("ยกเลิก")
          setEditIndex(index);
          console.log(item.calender.year);
          form.setFieldsValue({
            prefix: item.prefix,
            firstname: item.firstName,
            lastname: item.lastName,
            nationality: item.nationality,
            birth: moment(item.calender.year + '-' + (item.calender.month + 1) + '-' + item.calender.date,  'YYYY-MM-DD'),
            id1: item.id.part1,
            id2: item.id.part2,
            id3: item.id.part3,
            id4: item.id.part4,
            id5: item.id.part5,
            gender: item.gender,
            phone: item.dialingCode,
            phone2: item.phone,
            passport: item.passport,
            salary: item.salary,
          });
        }}
        className="manage-btn"
      >
        Edit
      </Button>
    ),
  }));

  const sortTask = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const handleSelectAll = (checked) => {
    setSelectAll(checked);
    if (checked) {
      const allRowKeys = task.map((_, index) => index.toString());
      setSelectedRowKeys(allRowKeys);
    } else {
      setSelectedRowKeys([]);
    }
  };

  const rowSelection = {
    selectedRowKeys,
    onSelectAll: handleSelectAll,
    onChange: onSelectChange,
  };

  const deleteData = () => {
    const newData = task.filter(
      (_, index) => !selectedRowKeys.includes(index.toString())
    );
    setTask(newData);
    setSelectedRowKeys([]);
    console.log("here");
  };

  return (
    <div>
      <div className="container-box">
        <Form style={{ margin: 15 }} form={form}>
          <Space.Compact>
            <Form.Item
              label="คำนำหน้า"
              name="prefix"
              rules={[{ required: true }]}
              style={{ width: 170 }}
            >
              <Select
                placeholder="คำนำหน้า"
                onChange={(value) => {
                  if (editIndex !== -1) {
                    const updatedTask = [...task];
                    updatedTask[editIndex].prefix = value;
                    setTask(updatedTask);
                  }
                  setPrefix(value);
                  console.log(prefix);
                }}
              >
                <Select.Option value="Mr.">นาย</Select.Option>
                <Select.Option value="Mrs.">นาง</Select.Option>
                <Select.Option value="Ms.">นางสาว</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="firstname"
              label="ชื่อจริง"
              rules={[{ required: true }]}
              style={{ display: "inline-block", width: 270, marginLeft: 10 }}
              onChange={(e) => {
                if (editIndex !== -1) {
                  const updatedTask = [...task];
                  updatedTask[editIndex].firstName = e.target.value;
                  setTask(updatedTask);
                }
                setFirstName(e.target.value);
                console.log(firstName);
              }}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="lastname"
              label="นามสกุล"
              rules={[{ required: true }]}
              style={{ display: "inline-block", width: 360, marginLeft: 10 }}
              onChange={(e) => {
                if (editIndex !== -1) {
                  const updatedTask = [...task];
                  updatedTask[editIndex].lastName = e.target.value;
                  setTask(updatedTask);
                }
                setLastName(e.target.value);
                console.log(lastName);
              }}
            >
              <Input />
            </Form.Item>
          </Space.Compact>
          <Space.Compact>
            <Form.Item
              label="วันเกิด"
              name="birth"
              rules={[{ required: true }]}
            >
              <DatePicker
                onChange={(value) => {
                  const year = value.year();
                  const month = value.month();
                  const date = value.date();
                  setCalender({
                    year: year,
                    month: month,
                    date: date,
                  });
                  console.log(calender);
                }}
              />
            </Form.Item>
            <Form.Item
              label="สัญชาติ"
              name="nationality"
              rules={[{ required: true }]}
              style={{ width: 400, marginLeft: 30 }}
            >
              <Select
                placeholder="-- กรุณาเลือก --"
                onChange={(value) => {
                  if (editIndex !== -1) {
                    const updatedTask = [...task];
                    updatedTask[editIndex].nationality = value;
                    setTask(updatedTask);
                  }
                  setNationality(value);
                  console.log(nationality);
                }}
              >
                <Select.Option value="thai">ไทย</Select.Option>
                <Select.Option value="korea">เกาหลี</Select.Option>
                <Select.Option value="english">อังกฤษ</Select.Option>
              </Select>
            </Form.Item>
          </Space.Compact>
          <Space.Compact>
            <Form.Item>
              <Space.Compact>
                <Form.Item
                  label="เลขบัตรประชาชน"
                  name="id1"
                  rules={[{ required: true }]}
                >
                  <Input
                    style={{ width: 100 }}
                    maxLength={1}
                    // value={id.part1}
                    onChange={(e) => handleInputChange("part1", e.target.value)}
                  />
                </Form.Item>{" "}
                -{" "}
                <Form.Item
                name="id2"
                rules={[{ required: true }]}
                >
                  <Input
                    style={{ width: 150 }}
                    // value={id.part2}
                    maxLength={4}
                    disabled={id.part1.length === 0 && idNum === 1}
                    onChange={(e) => handleInputChange("part2", e.target.value)}
                  />
                </Form.Item>
                {" "}
                -{" "}
                <Form.Item
                name="id3"
                rules={[{ required: true }]}
                >
                <Input
                  style={{ width: 150 }}
                  // value={id.part3}
                  maxLength={4}
                  disabled={id.part2.length < 4 && idNum === 1}
                  onChange={(e) => handleInputChange("part3", e.target.value)}
                />
                </Form.Item>
                {" "}
                -{" "}
                <Form.Item
                name="id4"
                rules={[{ required: true }]}
                >
               <Input
                  style={{ width: 120 }}
                  // value={id.part4}
                  maxLength={3}
                  disabled={id.part3.length < 3 && idNum === 1}
                  onChange={(e) => handleInputChange("part4", e.target.value)}
                />
                </Form.Item>
                {" "}
                -{" "}
                <Form.Item
                name="id5"
                rules={[{ required: true }]}
                >
                <Input
                  style={{ width: 100 }}
                  // value={id.part5}
                  maxLength={1}
                  disabled={id.part4.length < 3 && idNum === 1}
                  onChange={(e) => handleInputChange("part5", e.target.value)}
                />
                </Form.Item>
              </Space.Compact>
            </Form.Item>
          </Space.Compact>
          <Form.Item label="เพศ" name="gender" rules={[{ required: true }]}>
            <Radio.Group
              onChange={(e) => {
                if (editIndex !== -1) {
                  const updatedTask = [...task];
                  updatedTask[editIndex].gender = e.target.value;
                  setTask(updatedTask);
                }
                setGender(e.target.value);
                console.log(gender);
              }}
            >
              <Radio value="male">ผู้ชาย</Radio>
              <Radio value="women">ผูหญิง</Radio>
              <Radio value="unknow">ไม่ระบุ</Radio>
            </Radio.Group>
          </Form.Item>
          <Space.Compact>
            <Form.Item
              label="หมายเลขโทรศัพท์มือถือ"
              name="phone"
              rules={[{ required: true }]}
              style={{ width: 230, marginRight: 15 }}
            >
              <Select
                onChange={(value) => {
                  if (editIndex !== -1) {
                    const updatedTask = [...task];
                    updatedTask[editIndex].dialingCode = value;
                    setTask(updatedTask);
                  }
                  setDialingCode(value);
                  console.log(dialingCode);
                }}
              >
                <Select.Option value="+66">+66</Select.Option>
                <Select.Option value="+82">+82</Select.Option>
                <Select.Option value="+44">+44</Select.Option>
              </Select>
            </Form.Item>
            -
            <Form.Item>
              <Form.Item
                name="phone2"
                style={{ display: "inline-block", width: 270, marginLeft: 10 }}
                onChange={(e) => {
                  if (editIndex !== -1) {
                    const updatedTask = [...task];
                    updatedTask[editIndex].phone = e.target.value;
                    setTask(updatedTask);
                  }
                  setPhone(e.target.value);
                  console.log(phone);
                }}
              >
                <Input />
              </Form.Item>
            </Form.Item>
          </Space.Compact>
          <Form.Item
            name="passport"
            label="หนังสือเดินทาง"
            rules={[{ required: true }]}
            style={{ display: "inline-block", width: 470 }}
            onChange={(e) => {
              if (editIndex !== -1) {
                const updatedTask = [...task];
                updatedTask[editIndex].passport = e.target.value;
                setTask(updatedTask);
              }
              setPassport(e.target.value);
              console.log(passport);
            }}
          >
            <Input />
          </Form.Item>
          <Space.Compact>
            <Form.Item
              name="salary"
              label="เงินเดือนที่คาดหวัง"
              rules={[{ required: true }]}
              style={{ display: "inline-block", width: 450 }}
              onChange={(e) => {
                if (editIndex !== -1) {
                  const updatedTask = [...task];
                  updatedTask[editIndex].salary = e.target.value;
                  setTask(updatedTask);
                }
                setSalary(e.target.value);
                console.log(salary);
              }}
            >
              <Input />
            </Form.Item>
            <Button type="clear" className="btn-clear-data" onClick={onReset}>
              {btnCancel}
            </Button>
            <Button type="submit" className="btn-clear-data" onClick={onSave}>
              {btnChangeName}
            </Button>
          </Space.Compact>
        </Form>
      </div>
      <div>
        <Checkbox
          style={{ marginLeft: 138, marginTop: 80 }}
          checked={selectAll}
          onChange={(e) => handleSelectAll(e.target.checked)}
        >
          เลือกทั้งหมด
        </Checkbox>
        <Button onClick={deleteData} disabled={selectedRowKeys.length === 0}>
          ลบข้อมูล
        </Button>
      </div>
      <div className="table-container">
        <Table
          columns={columns}
          dataSource={data}
          style={{ width: 1200 }}
          onChange={sortTask}
          rowSelection={rowSelection}
        />
      </div>
    </div>
  );
}
