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
} from "antd";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
    // eslint-disable-next-line
  }, [task]);

  const onReset = () => {
    form.resetFields();
    clearData();
  };

  const handleInputChange = (part, value) => {
    setId((prevId) => ({ ...prevId, [part]: value }));
    console.log(id);
  };

  const clearData = () => {
    setId({
      part1: "",
      part2: "",
      part3: "",
      part4: "",
      part5: "",
    });
  };

  const onSave = () => {
    setTask([
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
    ]);
    console.log(task);
  };

  return (
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
                setPrefix(value);
                console.log(prefix);
              }}
            >
              <Select.Option value="Mr.">นาย</Select.Option>
              <Select.Option value="Mrs.">นาง</Select.Option>
              <Select.Option value="Ms.">นางสาว</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Form.Item
              name="firstname"
              label="ชื่อจริง"
              rules={[{ required: true }]}
              style={{ display: "inline-block", width: 270, marginLeft: 10 }}
              onChange={(e) => {
                setFirstName(e.target.value);
                console.log(firstName);
              }}
            >
              <Input value={"firstname"} />
            </Form.Item>
            <Form.Item
              name="lastname"
              label="นามสกุล"
              rules={[{ required: true }]}
              style={{ display: "inline-block", width: 360, marginLeft: 10 }}
              onChange={(e) => {
                setLastName(e.target.value);
                console.log(lastName);
              }}
            >
              <Input />
            </Form.Item>
          </Form.Item>
        </Space.Compact>
        <Space.Compact>
          <Form.Item label="วันเกิด" name="birth" rules={[{ required: true }]}>
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
        <Form.Item
          label="เลขบัตรประชาชน"
          name="id"
          rules={[{ required: true }]}
        >
          <Input
            style={{ width: 100 }}
            value={id.part1}
            onChange={(e) => handleInputChange("part1", e.target.value)}
          />{" "}
          -{" "}
          <Input
            style={{ width: 150 }}
            value={id.part2}
            onChange={(e) => handleInputChange("part2", e.target.value)}
          />{" "}
          -{" "}
          <Input
            style={{ width: 150 }}
            value={id.part3}
            onChange={(e) => handleInputChange("part3", e.target.value)}
          />{" "}
          -{" "}
          <Input
            style={{ width: 120 }}
            value={id.part4}
            onChange={(e) => handleInputChange("part4", e.target.value)}
          />{" "}
          -{" "}
          <Input
            style={{ width: 100 }}
            value={id.part5}
            onChange={(e) => handleInputChange("part5", e.target.value)}
          />
        </Form.Item>
        <Form.Item label="เพศ" name="gender" rules={[{ required: true }]}>
          <Radio.Group
            onChange={(e) => {
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
              setSalary(e.target.value);
              console.log(salary);
            }}
          >
            <Input />
          </Form.Item>
          <Button type="clear" className="btn-clear-data" onClick={onReset}>
            ล้างข้อมูล
          </Button>
          <Button type="submit" className="btn-clear-data" onClick={onSave}>
            ส่งข้อมูล
          </Button>
        </Space.Compact>
      </Form>
    </div>
  );
}