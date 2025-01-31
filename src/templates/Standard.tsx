import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

interface Experience {
  expfrom: Date | null;
  expto: Date | null;
  companyName: string;
  jobPosition: string;
  companyAddress: string;
  yourExperience: string;
}
interface Education {
  edufrom: Date | null;
  eduto: Date | null;
  degree: string;
  institute: string;
}

interface StandardProps {
  appState: {
    phoneNumber: string;
    fullName: string;
    email: string;
    address: string;
    jobPositionBasic: string;
    summary: string;
    linkedIn: string;
    github: string;
    twitter: string;
    skills: string[];
    experience: Experience[];
    education: Education[];
  };
  activeContext: {
    linkedInActive: boolean;
    setLinkedInActive: React.Dispatch<React.SetStateAction<boolean>>;
    twitterActive: boolean;
    setTwitterActive: React.Dispatch<React.SetStateAction<boolean>>;
    githubActive: boolean;
    setGithubActive: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "white",
    position: "relative",
  },
});

const Standard: React.FC<StandardProps> = ({ appState, activeContext }) => {
  return (
    <Document>
      <Page size={"A4"} style={styles.page}>
        <View
          style={{
            width: "100vw",
            display: "flex",
            flexDirection: "row",
          }}
        >
          {/* Left Side */}
          <View
            style={{
              color: "white",
              backgroundColor: "#323b4c",
              width: "65mm",
              paddingLeft: "15px",
              paddingVertical: "30px",
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              {/* Contact Heading */}
              <View>
                <Text
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                  }}
                >
                  Contact
                </Text>
                <View
                  style={{
                    width: "100%",
                    height: "0.8px",
                    backgroundColor: "white",
                  }}
                ></View>
              </View>
              {/* Contact Data */}
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {/* Phone */}
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2px",
                  }}
                >
                  <Text
                    style={{
                      fontSize: "13px",
                      width: "125px",
                      fontWeight: 600,
                    }}
                  >
                    Phone
                  </Text>

                  <Text style={{ fontSize: "12px", width: "125px" }}>
                    {appState.phoneNumber}
                  </Text>
                </View>
                {/* Email */}
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2px",
                  }}
                >
                  <Text
                    style={{
                      fontSize: "13px",
                      width: "125px",
                      fontWeight: 600,
                    }}
                  >
                    Email
                  </Text>

                  <Text style={{ fontSize: "12px", width: "125px" }}>
                    {appState.email}
                  </Text>
                </View>
                {/* Adress */}
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2px",
                  }}
                >
                  <Text
                    style={{
                      fontSize: "13px",
                      width: "125px",
                      fontWeight: 600,
                    }}
                  >
                    Address
                  </Text>

                  <Text style={{ fontSize: "12px", width: "125px" }}>
                    {appState.address}
                  </Text>
                </View>
                {/* LinkedIn */}
                {activeContext.linkedInActive === true ? (
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "2px",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: "13px",
                        width: "125px",
                        fontWeight: 600,
                      }}
                    >
                      LinkedIn
                    </Text>

                    <Text style={{ fontSize: "12px", width: "125px" }}>
                      {appState.linkedIn}
                    </Text>
                  </View>
                ) : null}

                {/* Skype */}
                {activeContext.githubActive ? (
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "2px",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: "13px",
                        width: "125px",
                        fontWeight: 600,
                      }}
                    >
                      Github
                    </Text>

                    <Text style={{ fontSize: "12px", width: "125px" }}>
                      {appState.github}
                    </Text>
                  </View>
                ) : null}

                {/* Twitter */}
                {activeContext.twitterActive ? (
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "2px",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: "13px",
                        width: "125px",
                        fontWeight: 600,
                      }}
                    >
                      Twitter
                    </Text>

                    <Text style={{ fontSize: "12px", width: "125px" }}>
                      {appState.twitter}
                    </Text>
                  </View>
                ) : null}
                {/* Education */}

                {appState.education.length > 0 ? (
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "15px",
                    }}
                  >
                    {/* Education Heading */}
                    <View>
                      <Text
                        style={{
                          fontSize: "18px",
                          fontWeight: 600,
                        }}
                      >
                        Education
                      </Text>
                      <View
                        style={{
                          width: "100%",
                          height: "0.8px",
                          backgroundColor: "white",
                        }}
                      ></View>
                    </View>
                    {/* Education Data */}
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "25px",
                      }}
                    >
                      {/* Single Education */}
                      {appState.education.map((item, index) => (
                        <View
                          key={index}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "5px",
                          }}
                        >
                          <Text
                            style={{
                              fontSize: "10px",
                              width: "155px",
                              fontWeight: 300,
                              lineHeight: 1,
                            }}
                          >
                            {item.edufrom?.getFullYear() +
                              " - " +
                              item.eduto?.getFullYear()}
                          </Text>
                          <Text
                            style={{
                              fontSize: "14px",
                              width: "155px",
                              fontWeight: 600,
                              lineHeight: 1,
                              textTransform: "capitalize",
                            }}
                          >
                            {item.degree}
                          </Text>
                          <Text
                            style={{
                              fontSize: "10px",
                              width: "155px",
                              fontWeight: 300,
                              lineHeight: 1,
                              textTransform: "capitalize",
                            }}
                          >
                            {item.institute}
                          </Text>
                        </View>
                      ))}
                    </View>
                  </View>
                ) : null}

                {/* Skills */}
                {appState.skills.length > 0 ? (
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "15px",
                    }}
                  >
                    {/* Skills Heading */}
                    <View>
                      <Text
                        style={{
                          letterSpacing: "3px",
                          fontSize: "18px",
                          fontWeight: 600,
                        }}
                      >
                        Skills
                      </Text>
                      <View
                        style={{
                          width: "100%",
                          height: "0.8px",
                          backgroundColor: "white",
                        }}
                      ></View>
                    </View>
                    {/* expertise Data */}
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "15px",
                      }}
                    >
                      {/* Single expertise */}
                      {appState.skills.map((item, index) => (
                        <View
                          key={index}
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: "4px",
                            paddingRight: "15px",
                          }}
                          wrap={false}
                        >
                          <View
                            style={{
                              backgroundColor: "white",
                              width: "5px",
                              height: "5px",
                              borderRadius: "5px",
                            }}
                          ></View>
                          <Text
                            style={{
                              fontSize: "12px",
                              width: "145px",
                              textTransform: "capitalize",
                            }}
                          >
                            {item}
                          </Text>
                        </View>
                      ))}
                    </View>
                  </View>
                ) : null}
              </View>
            </View>
          </View>
          {/* Right side */}
          <View
            style={{
              width: "145mm",
              backgroundColor: "#fafafa",
              color: "#141315",
              paddingVertical: "30px",
              display: "flex",
              flexDirection: "column",
              gap: "25px",
            }}
          >
            {/* NAME $ JOB $ Summary */}
            <View
              style={{
                color: "#333a4c",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: "15px",
                  gap: "10px",
                }}
              >
                <View>
                  <Text
                    style={{
                      letterSpacing: "3px",
                      fontSize: "24px",
                      fontWeight: 600,
                      width: "135mm",

                      lineHeight: 1.2,
                    }}
                  >
                    {appState.fullName}
                  </Text>
                  <Text
                    style={{
                      fontSize: "18px",
                      width: "135mm",

                      letterSpacing: "3px",
                    }}
                  >
                    {appState.jobPositionBasic}
                  </Text>
                </View>

                <Text
                  style={{
                    fontSize: "12px",
                    lineHeight: 1,
                    textAlign: "justify",
                    width: "135mm",
                  }}
                >
                  {appState.summary}
                </Text>
              </View>
            </View>
            {/* Experience */}
            {appState.experience.length > 0 ? (
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: "15px",
                  paddingRight: "20px",
                  gap: "20px",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1px",
                  }}
                >
                  <View>
                    <Text
                      style={{
                        fontWeight: 600,
                        fontSize: "18px",
                        color: "#333a4c",
                      }}
                    >
                      Experience
                    </Text>
                  </View>
                  <View
                    style={{
                      width: "100%",
                      height: "1px",
                      backgroundColor: "#333a4c",
                    }}
                  ></View>
                </View>
                {/* All Experiences */}
                <View style={{ display: "flex", flexDirection: "column" }}>
                  {/* Single Experience */}
                  {appState.experience.map((exp, index) => (
                    <View
                      key={index}
                      style={{ display: "flex", flexDirection: "row" }}
                    >
                      {/* Comp Name */}

                      {/* LINKINGING */}
                      <View
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "column",
                          width: "9px",
                        }}
                      >
                        <View
                          style={{
                            width: "9px",
                            height: "9px",
                            borderRadius: "9px",
                            border: "1.2px solid #333a4c",
                          }}
                        ></View>
                        <View
                          style={{
                            width: "1px",
                            flexGrow: 1,
                            backgroundColor: "#333a4c",
                          }}
                        ></View>
                      </View>
                      {/* Experience & job post */}
                      <View
                        style={{
                          width: "400px",
                          paddingLeft: "10px",
                          display: "flex",
                          flexDirection: "column",
                          gap: "5px",
                          color: "#333a4c",
                          marginTop: "-4px",
                        }}
                      >
                        <View
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <Text style={{ fontSize: "13px", fontWeight: 500 }}>
                            {exp.expfrom?.getFullYear() +
                              " - " +
                              exp.expto?.getFullYear()}
                          </Text>
                          <Text style={{ fontSize: "12px" }}>
                            {exp.companyName + " | " + exp.companyAddress}
                          </Text>
                        </View>
                        <Text
                          style={{
                            fontSize: "16px",
                            fontWeight: 600,
                            textTransform: "capitalize",
                          }}
                        >
                          {exp.jobPosition}
                        </Text>
                        <Text
                          style={{
                            fontSize: "12px",
                            marginBottom: "30px",
                            textAlign: "justify",
                          }}
                        >
                          {exp.yourExperience}
                        </Text>
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            ) : null}
          </View>
        </View>
      </Page>
    </Document>
  );
};
export default Standard;
