/**
 * Created by Administrator on 2016/12/27.
 */
import React ,{map} from 'react';
import { Upload, message, Button, Icon } from 'antd';

//插件可用
import style from './Home.css';
import echarts from 'echarts';
import $ from 'jquery';
import fetch from 'dva/fetch';
import Layout from '../components/Layout';

const props = {
  name: 'file',
  action: '/upload.do',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
var Home = React.createClass({




  componentDidMount() {

  },

  render: function() {
    return (

      <Layout>
        <div>
          <Upload {...props}>
            <Button type="ghost">
              <Icon type="upload" /> Click to Upload
            </Button>
          </Upload>
        </div>
      </Layout>

    )
  }

});

export default Home;
