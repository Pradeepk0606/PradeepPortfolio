"use client";
import { Document, Page, Text, View, StyleSheet, Font } from "@react-pdf/renderer";
import resume from "@/data/resumeData";

Font.register({ family: "Inter", fonts: [
  { src: "https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fv.ttf" },
]});

const styles = StyleSheet.create({
  page: { padding: 32, fontFamily: "Inter" },
  h1: { fontSize: 18, fontWeight: 700 },
  h2: { fontSize: 12, marginTop: 12, marginBottom: 6, fontWeight: 600 },
  text: { fontSize: 10, lineHeight: 1.4 },
  row: { marginBottom: 6 },
  chip: { fontSize: 9, marginRight: 6 },
});

export default function ResumePdf() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.row}><Text style={styles.h1}>{resume.name}</Text></View>
        <View style={styles.row}><Text style={styles.text}>{resume.summary}</Text></View>

        <View><Text style={styles.h2}>Experience</Text></View>
        {resume.experience.map((e) => (
          <View key={e.company} style={styles.row}>
            <Text style={styles.text}>{e.role} • {e.company} • {e.period}</Text>
            <Text style={styles.text}>{e.highlights.join("; ")}</Text>
          </View>
        ))}

        <View><Text style={styles.h2}>Projects</Text></View>
        {resume.projects.map((p) => (
          <View key={p.name} style={styles.row}>
            <Text style={styles.text}>{p.name} — {p.description}</Text>
          </View>
        ))}

        <View><Text style={styles.h2}>Education</Text></View>
        <View style={styles.row}><Text style={styles.text}>{resume.education.degree} • {resume.education.institution}</Text></View>

        <View><Text style={styles.h2}>Skills</Text></View>
        <View style={styles.row}><Text style={styles.text}>{Object.entries(resume.skills).map(([k,v]) => `${k}: ${v.join(', ')}`).join(" | ")}</Text></View>

        <View><Text style={styles.h2}>Certifications</Text></View>
        <View style={styles.row}><Text style={styles.text}>{resume.certifications.join(", ")}</Text></View>

        <View><Text style={styles.h2}>Contact</Text></View>
        <View style={styles.row}><Text style={styles.text}>{resume.contact.email} • {resume.contact.linkedin} • {resume.contact.github}</Text></View>
      </Page>
    </Document>
  );
}
