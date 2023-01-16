import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1F1E25",
    flexDirection:'row',
    alignItems:'center',
    borderRadius:5,
    marginBottom:10
  },
  name: {
    flex:1,
    color: "#fff",
    fontSize:16,
    marginLeft:16
  },
  buttonText: {
    fontSize: 24,
    color: "#fff",
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#E23C44",
    alignItems: "center",
    justifyContent: "center",
  },
});
