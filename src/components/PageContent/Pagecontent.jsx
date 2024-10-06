import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import React from 'react'
import PageRoutes from '../PageRoutes/PageRoutes'

function Pagecontent() {
  return (
        <Layout>
    <Content>
            
    <div
            style={{
              minHeight: "100%",
              background: "white",
            }}
          >
           <PageRoutes/>
          </div>
    </Content>
        </Layout>
  )
}

export default Pagecontent
