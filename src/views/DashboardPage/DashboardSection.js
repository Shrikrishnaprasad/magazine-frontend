import React from "react";
// @material-ui/icons
import AccessTime from "@material-ui/icons/AccessTime";
// core components
import Tabs from "components/CustomTabs/CustomTabs.js";
import { Receipt } from "@material-ui/icons";
import SubTab from "./Tabs/SubTab";
import { useGlobalContext } from "components/ContextApi/context";
import pdf from "./shrisudha.pdf";
export default function DashboardSection() {
  const { user } = useGlobalContext();
  return (
    <Tabs
      headerColor="primary"
      tabs={[
        {
          tabName: "Subscription",
          tabIcon: AccessTime,
          tabContent: <SubTab />,
        },
        {
          tabName: "PDF",
          tabIcon: Receipt,
          tabContent: (
            <>
              {user.isSubscribed ? (
                <object
                  data={pdf + "?#zoom=320"}
                  type="application/pdf"
                  width="100%"
                  height="100%"
                  style={{ minHeight: "720px" }}
                >
                  <p>
                    Shri Sudha pdf -{" "}
                    <a href="https://drive.google.com/file/d/1PLqzTF38zvu17vdw7vHveBzvvACz8a47/view?usp=sharing">
                      Click here to view!
                    </a>
                  </p>
                </object>
              ) : (
                <h3>Kindly please subscribe to read !</h3>
              )}
            </>
          ),
        },
      ]}
    />
  );
}
