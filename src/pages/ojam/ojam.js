import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  Row,
  Col,
  Table,
  Progress,
  Button,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Input,
  Label,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';
import { Sparklines, SparklinesBars } from 'react-sparklines';

import Widget from '../../components/Widget';
import s from './Static.scss';

class Tables extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tableStyles: [
        {
          id: 1,
          picture: require('../../images/tables/1.jpg'), // eslint-disable-line global-require
          description: 'Palo Alto',
          info: {
            type: 'JPEG',
            dimensions: '200x150',
          },
          date: new Date('September 14, 2012'),
          size: '45.6 KB',
          progress: {
            percent: 29,
            colorClass: 'success',
          },
        },
        {
          id: 2,
          picture: require('../../images/tables/2.jpg'), // eslint-disable-line global-require
          description: 'The Sky',
          info: {
            type: 'PSD',
            dimensions: '2400x1455',
          },
          date: new Date('November 14, 2012'),
          size: '15.3 MB',
          progress: {
            percent: 33,
            colorClass: 'warning',
          },
        },
        {
          id: 3,
          picture: require('../../images/tables/3.jpg'), // eslint-disable-line global-require
          description: 'Down the road',
          label: {
            colorClass: 'success',
            text: 'INFO!',
          },
          info: {
            type: 'JPEG',
            dimensions: '200x150',
          },
          date: new Date('September 14, 2012'),
          size: '49.0 KB',
          progress: {
            percent: 38,
            colorClass: 'inverse',
          },
        },
        {
          id: 4,
          picture: require('../../images/tables/4.jpg'), // eslint-disable-line global-require
          description: 'The Edge',
          info: {
            type: 'PNG',
            dimensions: '210x160',
          },
          date: new Date('September 15, 2012'),
          size: '69.1 KB',
          progress: {
            percent: 17,
            colorClass: 'danger',
          },
        },
        {
          id: 5,
          picture: require('../../images/tables/5.jpg'), // eslint-disable-line global-require
          description: 'Fortress',
          info: {
            type: 'JPEG',
            dimensions: '1452x1320',
          },
          date: new Date('October 1, 2012'),
          size: '2.3 MB',
          progress: {
            percent: 41,
            colorClass: 'primary',
          },
        },
      ],
      checkboxes1: [false, true, false, false],
      checkboxes2: [false, false, false, false, false, false],
      checkboxes3: [false, false, false, false, false, false],
    };

    this.checkAll = this.checkAll.bind(this);
  }

  parseDate(date) {
    this.dateSet = date.toDateString().split(' ');
    return `${date.toLocaleString('en-us', { month: 'long' })} ${this.dateSet[2]}, ${this.dateSet[3]}`;
  }

  checkAll(ev, checkbox) {
    const checkboxArr = (new Array(this.state[checkbox].length)).fill(ev.target.checked);
    this.setState({
      [checkbox]: checkboxArr,
    });
  }

  changeCheck(ev, checkbox, id) {
    this.state[checkbox][id] = ev.target.checked;
    if (!ev.target.checked) {
      this.state[checkbox][0] = false;
    }
    this.setState({
      [checkbox]: this.state[checkbox],
    });
  }

  render() {
    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem>YOU ARE HERE</BreadcrumbItem>
          <BreadcrumbItem active>OJAM Uploads</BreadcrumbItem>
        </Breadcrumb>
        <h1 className="page-title mb-lg">OJAM - <span className="fw-semi-bold">Uploads</span></h1>
        <Row>
          <Col sm={12}>
            <Widget
              title={<h5>
                Table <span className="fw-semi-bold">Styles</span>
              </h5>} settings close
            >
              <Table borderless className={s.mainTable}>
                <thead>
                  <tr>
                    <th className="hidden-sm-down">#</th>
                    <th>Album Art</th>
                    <th>Username</th>
                    <th className="hidden-sm-down">Info</th>
                    <th className="hidden-sm-down">Date</th>
                    <th className="hidden-sm-down">Size</th>
                    
                    <th className="hidden-sm-down">Id</th>
                    <th className="hidden-sm-down">Jamming status</th>
                    <th className="hidden-sm-down">Comments</th>
                    <th className="hidden-sm-down">Liked by</th>
                    <th className="hidden-sm-down">Played</th>
                    <th className="hidden-sm-down">Shared</th>
                    <th className="hidden-sm-down">Jammers</th>
                    <th className="hidden-sm-down">Music Path</th>
                    <th className="hidden-sm-down">_______v</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {
                  this.state.tableStyles.map(row =>
                    <tr key={row.id}>
                      <td>{row.id}</td>
                      <td>
                        <img className="img-rounded" src={row.picture} alt="" height="60" />
                      </td>
                      <td>
                        {row.description}
                        {row.label &&
                        <div>
                          <Badge color={row.label.colorClass}>{row.label.text}</Badge>
                        </div>
                        }
                      </td>
                      <td>
                        <p className="mb-0">
                          <small>
                            <span className="fw-semi-bold">Tags:</span>
                            <span className="text-muted">&nbsp; {row.info.type}</span>
                          </small>
                        </p>
                        <p>
                          <small>
                            <span className="fw-semi-bold">Likes:</span>
                            <span className="text-muted">&nbsp; {row.info.dimensions}</span>
                          </small>
                        </p>
                      </td>
                      <td className="text-semi-muted">
                        {this.parseDate(row.date)}
                      </td>
                      <td className="text-semi-muted">
                        {row.size}
                      </td>
                      <td className="width-150">
                        <Progress
                          style={{height: '7px'}}
                          color="success" value={row.progress.percent}
                          className="progress-sm mb-xs rounded mt-xs"
                        />
                      </td>
                    </tr>,
                  )
                }
                </tbody>
              </Table>
              <div className="clearfix">
                <div className="float-right">
                  <Button color="danger" className="mr-xs" size="sm">Send to...</Button>
                  <UncontrolledButtonDropdown>
                    <DropdownToggle color="default" className="mr-xs" size="sm" caret>Clear</DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Clear</DropdownItem>
                      <DropdownItem>Move ...</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Separated link</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledButtonDropdown>
                </div>
              </div>
            </Widget>
          </Col>
        </Row>
              </div>
    );
  }

}

export default withStyles(s)(Tables);
