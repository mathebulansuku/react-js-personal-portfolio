export default function Accolades() {
  return (
    <section>
      <div className="portfolio-container-box">
        <div className="portfolio-container">
          <h1 className="section-heading">My Certificates</h1>
        </div>
      </div>
      <div className="certificate-container">
        <img src="./img/aws-practitioner.png" alt="AWS Cloud Practitioner" />
        <img src="./img/aws-saa.png" alt="AWS Solutions Architect Associate" />
        <img
          src="/img/aws-sap.png"
          alt="AWS Solutions Architect Professional"
        />
        <img src="/img/aws-developer.png" alt="AWS Developer Associate" />
        <img src="/img/aws-sysops.png" alt="AWS SysOps Associate" />
        <img src="/img/aws-security.png" alt="AWS Security Specialty" />
        <img src="/img/terraform.png" alt="Terraform Certificate" />
      </div>
    </section>
  );
}
