import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    position: "relative",
  },
});

function MyDoc() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
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
            {/* Image */}

            <View
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingRight: "15px",
              }}
            ></View>

            {/* Contact */}
            <View
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
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
                    Lorem.
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
                    Lorem ipsum dolor sit.
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
                    Lorem, ipsum.
                  </Text>
                </View>
                {/* LinkedIn */}

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

                  <Text style={{ fontSize: "12px", width: "125px" }}>mioz</Text>
                </View>
                {}

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
                    Skype
                  </Text>

                  <Text style={{ fontSize: "12px", width: "125px" }}>moiz</Text>
                </View>

                {/* GItHUB */}

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
                    GitHub
                  </Text>

                  <Text style={{ fontSize: "12px", width: "125px" }}></Text>
                </View>

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
                    Stack Overflow
                  </Text>

                  <Text style={{ fontSize: "12px", width: "125px" }}>
                    Lorem, ipsum.
                  </Text>
                </View>

                {/* Custom Block */}

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
                    Lorem, ipsum dolor.
                  </Text>

                  <Text style={{ fontSize: "12px", width: "125px" }}>
                    Lorem ipsum dolor sit amet consectetur.
                  </Text>
                </View>
              </View>
            </View>
            {/* Education */}

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
                  Software
                </Text>
                <View
                  style={{
                    width: "100%",
                    height: "0.8px",
                    backgroundColor: "white",
                  }}
                ></View>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}
export default MyDoc;
