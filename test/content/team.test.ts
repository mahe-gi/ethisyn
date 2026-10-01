import { describe, it, expect } from "vitest";
import { teamContent } from "@/content/team";

describe("Team Content", () => {
  it("contains all authentic team members with high-profile titles and real photos", () => {
    expect(teamContent.members).toHaveLength(11);

    const cto = teamContent.members.find((m) => m.id === "mahesh-ch");
    expect(cto).toBeDefined();
    expect(cto?.role).toBe("Chief Technology & Operations Officer (CTO)");
    expect(cto?.image).toBe("/team/mahesh-ch.png");

    const cbo = teamContent.members.find((m) => m.id === "ganesh-ch");
    expect(cbo).toBeDefined();
    expect(cbo?.role).toBe("Chief Business Officer (CBO)");

    const cmo = teamContent.members.find((m) => m.id === "patan-rabiya");
    expect(cmo).toBeDefined();
    expect(cmo?.role).toBe("Chief Marketing & Growth Officer (CMO)");

    const partner = teamContent.members.find((m) => m.id === "kavya-sharma");
    expect(partner).toBeDefined();
    expect(partner?.role).toBe("Head of Corporate Alliances & Partnerships");
    expect(partner?.image).toBe("/team/kavya-sharma.png");

    const design = teamContent.members.find((m) => m.id === "neeraja-k");
    expect(design).toBeDefined();
    expect(design?.name).toBe("Neeraja K");
    expect(design?.role).toBe("Head of Design & UI/UX");
    expect(design?.image).toBe("/team/neeraja-k.png");

    const leadEng = teamContent.members.find((m) => m.id === "sandhya-chirumamilla");
    expect(leadEng).toBeDefined();
    expect(leadEng?.role).toBe("Head of Software & Web Engineering");

    const mobile = teamContent.members.find((m) => m.id === "mohammad-sohail");
    expect(mobile).toBeDefined();
    expect(mobile?.role).toBe("Head of Mobile Engineering");
    expect(mobile?.image).toBe("/team/mohammad-sohail.png");

    const aiml = teamContent.members.find((m) => m.id === "vaibhav-pawar");
    expect(aiml).toBeDefined();
    expect(aiml?.role).toBe("Head of AI & Automation Systems");

    const dataEng = teamContent.members.find((m) => m.id === "prashanth-d");
    expect(dataEng).toBeDefined();
    expect(dataEng?.role).toBe("Head of Data Engineering & Analytics");
    expect(dataEng?.image).toBe("/team/prashanth-d.png");

    const samihan = teamContent.members.find((m) => m.id === "samihan-chousalkar");
    expect(samihan).toBeDefined();
    expect(samihan?.role).toBe("Head of Backend & Distributed Systems");

    const deepak = teamContent.members.find((m) => m.id === "deepak-kumar-patra");
    expect(deepak).toBeDefined();
    expect(deepak?.role).toBe("Head of Product Engineering & Full-Stack Systems");
  });

  it("contains the 4 studio rules", () => {
    expect(teamContent.rules).toHaveLength(4);
  });

  it("maintains a pure, authentic founding team roster with zero placeholders", () => {
    expect(teamContent.members).toHaveLength(11);
    teamContent.members.forEach((member) => {
      expect(member.id).toBeTruthy();
      expect(member.name).toBeTruthy();
      expect(member.role).toBeTruthy();
      expect(member.discipline).toBeTruthy();
      expect(member.bio).toBeTruthy();
    });
  });

  it("ensures each member has complete professional profiles and real portraits", () => {
    teamContent.members.forEach((member) => {
      expect(member.social.linkedin).toContain("linkedin.com");
      expect(member.image).toMatch(/^\/team\/[a-z-]+\.png$/);
    });
  });
});
