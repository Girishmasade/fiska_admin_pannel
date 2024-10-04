import React from "react";
import { SearchOutlined, FilterOutlined, BellOutlined, ClockCircleOutlined} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import NavbarMenu from "./NavbarMenu";
import Logo from "../logo/Logo";
import Page from "./Pagination";
import Head from "../../pages/Head";
const { Header, Content, Footer, Sider } = Layout;

const Navbar = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider className="border bg-white">
        <div />
        <Logo />
        <Menu className="relative top-4">
          <NavbarMenu />
        </Menu>
      </Sider>

      <Layout>
        <Header
          style={{
            background: colorBgContainer,
            height: "50px",
          }}
        >
          <div className="relative top-3 text-xl">
            <label htmlFor="data">Wonka Industries</label>
            <select id="data" className="bg-white pl-4 outline-none">
            </select>
            <div className="flex gap-7 justify-end relative bottom-6 right-2">
            <BellOutlined />
            <ClockCircleOutlined className="text-green-500"/>
            </div>
          </div>
        </Header>
        <hr />
        <Header
          style={{
            background: colorBgContainer,
            height: "12vh",
          }}
        >
          <div className="flex flex-col">
            <h1 className="font-bold text-xl pt-2">Authorised Businesses</h1>
            <div className="flex gap-4 relative bottom-30">
              <p className="underline text-green-500">
                <a href="#" className="hover:text-green-500">
                  Authorised
                </a>
              </p>
              <p>
                <a href="#" className="hover:text-green-500">
                  Requests
                </a>
              </p>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <div className="flex m-3 gap-4">
            <div className="border-gray-200 bg-white flex border outline-none h-8">
              <input
                type="search"
                className=" outline-none w-52 pl-2"
                placeholder="search business name.."
              />{" "}
              <p className="pt-1">|</p>
              <button className="bg-white pl-2 pr-2">
                {" "}
                <SearchOutlined className="" />
              </button>
            </div>
            <button className="pl-4 pr-2 border bg-white hover:text-green-600">
              <FilterOutlined className="pr-1" /> Filters
            </button>
          </div>
          <div
            style={{
              minHeight: "100%",
              background: "white",
              borderRadius: borderRadiusLG,
            }}
          >
            <Head/>
          </div>
        </Content>
        <Footer>
            <Page/>
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Navbar;
