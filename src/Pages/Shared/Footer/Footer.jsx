const Footer = () => {

    const date = new Date().getFullYear();

    return (
        <section className="flex justify-around mt-20 pb-10 pt-10 bg-pink-50">
            <div>
                <p className="mb-5"><b>নির্বাচন সম্পর্কিত ওয়েবসাইটসমূহ</b></p>
                <div className="text-sm text-gray-600">
                    <p>www.bangladesh.gov.bd</p>
                    <p>www.nationalparliment.bd</p>
                    <p>www.electioncomission.com.bd</p>
                </div>
            </div>
            <div>
                <p className="mb-5"><b>যোগাযোগ</b></p>
                <div className="text-sm text-gray-600">
                    <p>Tejgaon Link Road, <br /> Aloha Convention Hall. <br /> Shanta Forum.</p>
                    <p>📞 +088 (246) 642-27-10</p>
                    <p>📧 example@gmail.com </p>
                </div>
            </div>
            <div>
                <p className="mb-5"><b>© {date} Voteden All Rights Reserved.</b></p>
                <p className="text-green-500"><u>গোপনীয় নীতিমালা</u></p>
            </div>
        </section>
    );
};

export default Footer;