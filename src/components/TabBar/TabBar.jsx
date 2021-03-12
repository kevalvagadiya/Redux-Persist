import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import "./tabBar.css";
import { Avatar, Chip } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [type, setType] = React.useState("LABEL1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const label1 = () => {
    return (
      <span class="mdc-tab__text-label">
        <img
          data-effect="solid"
          width="16px"
          heigth="16px"
          class="topic-list-logo"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAEHklEQVRIie2WTUxcVRTHf+fNPJxUBosNNnxUdCKzIQzIm3FiKlVTG9QmbJS4IqQ2QRNrw6Iroymm6kLTpGn8KCaV+rURVzWmaTAh1mIyDE8ohI0NGPnImGgpEYspD95xwZ0WpmWG4K7pfzN37vnf//+dd88998Fd3OmQQoRYLPaAbdtdQKOqzonI+WAw2JNKpf4GSCaTJZ7nvWxZVrOqlgK/+L5/dHh4+M8tGzuOcx+QBmoAD7BN6IqqHgEQkePA/WY+y/k1GAwmsg93O1gFEn4VqFHV98Ph8DbLsh5U1S7gHhHpEZEeoAg4GgwGd4XD4W0i8gEQ9Tzvlf+TcT+w2/O80tHR0Wtmzga+B/YZWh+w33VdD6C2trY4FArNAT+5rrt3qxnXAL9lTQFR1dPAPlU9q6pnzfh0Nonx8fF/gN+BR/IJBwsY+4AVj8efA5LA06q6B0BEWrIkEWmLx+PVQD+QUlUAzSe84auOx+OPquoP3CycLBaAaSBbOMVANRDO4V2xLOuZdDo9sinjWCx2r23bHwNt2biqdotIGxACnnRd9+LaNY7jPAH8CPyrql+JSLawfOAL4DXXdRfXrgncxvQC8CwwCJwHGgEVkYeAk67rfpr7sJlMZqqiomIH0GS4lcAZY/y8iDSXl5d/nclkvOyadcVl2/a7rDaK7kgkstuyrPcARCQBzK+srHSZDPc7jjPjOM602X+Wlpa6gHnDxbKsY8DjwBlVjavqO2u9cqv6BWCqpKTkUG9v70o6nZ4ERszrPjEyMjJveKeASqBKVbsBxsbGrqrqCRO/lE6nJ80R6wBmROTFfMYA1sLCwtq9L9hWN4FbKnydsYh8C1SJSLfjOHYikYgA9SbW2dDQsN2MO4AZYFpVOwDq6upKRaTTSNUnEolIa2trAPgI2AX0rvVad46XlpbetG27SVUPAA2+74+a0CDwWCAQ6AI6h4aGzhmxGygqKuoCtme5vu+/MTExERORhKqmReStDTM2HWoPqxVZD7QDqOowcA143RyddTBzh4BFwwU4KCKOqn4mIk/lHqetNpAp8wtQYrLPbSBzlmXt3XQDyclkCrguIofJaZm3CIlc4GbLPAkUua5bvZF2oV4tgG/29BzwdmNj4+ci0mYuCESkRVW/dF23HVO9juMUkC18O10GHq6trS02/1VEDgJ9ItJiLoo+M6ewei0C1SJyOZ9wIF+wsrJyJ9Bs27YdjUb7y8rKKn3fPywiL7H6AQCwU1UDVVVVk9FodNH3/WNAk6qeymQyP2+knXePk8lkyfLychqIsv7T5y/giBkfB3aY8Y1Pn1AoFB8YGFhgA+TNeHZ29npZWdk3gUCgGEBVx0Tkw1AodCCVSg1mMplLkUjkk+Xl5T9UFRGZB77zPK99aGjoaj7tu7jz8R+MUaHDqFXQNwAAAABJRU5ErkJggg=="
        />
        &nbsp;<span class="font-weight-bold">Full-Stack, Web &amp; Mobile</span>
      </span>
    );
  };
  const label2 = () => {
    return (
      <span class="mdc-tab__text-label">
        <img
          data-effect="solid"
          class="topic-list-logo"
          width="16px"
          heigth="16px"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAB4ElEQVRoge2Yz0oCQRzHP/aHLnXQB/AZIuhQXSPSFwjfoSfwFEhChpeMXqGH8NShMC/dgiCCeoI0Q03QDjMLv13WVWd3XZX5wLDD7ze/+X1nd2Z2dsFisVgslhUmDzSBPjCac+nr3DlT8SfAMAHhfiVvMoDmAgh3yrPJAOS0SZt0EJKMyN8b1ygV0MFoynZxMlHD2hxEXKPu4NUccrmQc9CUHWCg++jEoSHuJ3AAbOj6WxwJohhAFfgBLn18h6L+JOplHVONIP9YpplCRdHm28dfF/6CsLeEvRhSg3HwGe4XXc3jXwfawp8VvpqwD3VfJhoCCQreB36F/wHY8rTZE/5Pj28T99Pp4p5usQ/gQ/he8X/RnYs29z7+tI512rzPqAEwX8TT3JEjUX80zBOKsFPoS/h3Pb7EpxAEL+KssLdRC1pyK/yJLGIHuY22hL0g7HWfOLk7JbaNOlRQ4kvCJrfJC5+Yko6pRKQh8uAXEXtskjwCDaGCOzpugDrQmZLYYe4OtTgrqDNPbKz0B82fqGcikTMbMmffpIOl/6jPsRi/VYbAqckAnEE0SO7HViOM+KWjjDpUJT1lJpUu4vM1Ja5tYDu6+xErHfQL0tlGR8ANAX/AFogeSqvFYrFYLMvPP6OdseLSxByoAAAAAElFTkSuQmCC"
        />
        &nbsp;<span class="font-weight-bold">Coding &amp; Data Structures</span>
      </span>
    );
  };
  const label3 = () => {
    return (
      <span class="mdc-tab__text-label">
        <img
          data-effect="solid"
          class="topic-list-logo"
          width="16px"
          heigth="16px"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAB+0lEQVRoge2YMU/CQBTHf5BANHHQ3cTFWT6AI4Mfw92waKKbCCa6mvgd2PQTOMrIbiJETVwZjERhoODQa7g2Lb07rh5i/8lL2uu9x///jr7eO8iRI8dKYh1oAj1gDEwd2VhwaAhOyuTbDkknWRtYUxHQXAKySVZXEdCTHE6BkopTRigBZxKfZxUn+T9fzoyaOsqE34kQCjEO05TnLpDIqfjLRKwjCwENoA+cZxBbCfJbr4tdwBO+HrCTNSfbK1CTYhaBQ8vxlWC6AhvAR8T/FTtJ0uJkKqAW8Q2sqhlnYU4mAgrAk+T3Ll23dJja4GQi4EDy+QT2pfshsKURa2FOSZOvBZm0/cqNmN+Rxo6kOJfA9xz/IXBlW0ABGCiQ9/BLKYJ0MN4RYxVgohBnYFsA+FmZtwJfhHeLm4QzXQHuFchnsgKmaEmxHphlfwLsacRxJqBKfJbvNOM4E1Ag3F8E2a9oxnEmAOCCxbKvzcm2gG1mTZJJ9rU52RYAfnXq42+1TZDIKe/IXCNOgCddL0tTH8CLPowT8CZdH+NWRBk4ke5fVJwapH/uXZnSwdayHi0+oni0iJhYB7q4P9ztCi6x5G2VSZ3Sa7VMr2QZ/VPIBbiGiYC45l5GWmVJmhvXSlqHanNvatFmPhW6KzAFboGR7g8pYCRi58iR4z/hByCF8bH7l1/zAAAAAElFTkSuQmCC"
        />
        &nbsp;
        <span class="font-weight-bold">System Design &amp; Architecture</span>
      </span>
    );
  };

  function getContent() {
    switch (type) {
      case "LABEL1":
        return (
          <div className="content-listing">
            <Chip avatar={<Avatar>M</Avatar>} label=".NET Core" />
            <Chip avatar={<Avatar>M</Avatar>} label="JAVA" />
            <Chip avatar={<Avatar>M</Avatar>} label="Js" />
            <Chip avatar={<Avatar>M</Avatar>} label="CSS" />
            <Chip avatar={<Avatar>M</Avatar>} label="PHP" />
            <Chip avatar={<Avatar>M</Avatar>} label="HTML" />
            <Chip avatar={<Avatar>M</Avatar>} label="JavaScript" />
            <Chip avatar={<Avatar>M</Avatar>} label="React" />
            <Chip avatar={<Avatar>M</Avatar>} label="Node" />
          </div>
        );
      case "LABEL2":
        return (
          <div className="content-listing">
            <Chip avatar={<Avatar>M</Avatar>} label="Sorting" />
            <Chip avatar={<Avatar>M</Avatar>} label="Arrays" />
            <Chip avatar={<Avatar>M</Avatar>} label="Linked Lists" />
            <Chip avatar={<Avatar>M</Avatar>} label="Trie" />
            <Chip avatar={<Avatar>M</Avatar>} label="Trees" />
            <Chip avatar={<Avatar>M</Avatar>} label="Stacks" />
            <Chip avatar={<Avatar>M</Avatar>} label="String" />
          </div>
        );
      case "LABEL3":
        return (
          <div className="content-listing">
            <Chip avatar={<Avatar>M</Avatar>} label="SOA" />
            <Chip avatar={<Avatar>M</Avatar>} label="API Design" />
            <Chip avatar={<Avatar>M</Avatar>} label="No SQl" />
            <Chip avatar={<Avatar>M</Avatar>} label="CDN" />
            <Chip avatar={<Avatar>M</Avatar>} label="Caching" />
          </div>
        );

      default:
        return null;
    }
  }

  return (
    <div className="tabbar-wrapper">
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab
            label={label1()}
            onClick={() => {
              setType("LABEL1");
            }}
          />
          <Tab
            label={label2()}
            onClick={() => {
              setType("LABEL2");
            }}
          />
          <Tab
            label={label3()}
            onClick={() => {
              setType("LABEL3");
            }}
          />
        </Tabs>
      </Paper>
      <div className="content-wrapper">{getContent()}</div>
    </div>
  );
}
