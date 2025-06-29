
const FounderStory = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#23263A] mb-4">
            Born From Real Burnout
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#635DFF] to-[#6FFFCB] mx-auto rounded-full"></div>
        </div>

        <div className="bg-gradient-to-br from-[#E5E9FF] to-white rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 bg-gradient-to-br from-[#635DFF] to-[#6FFFCB] rounded-full flex items-center justify-center text-white text-6xl font-bold">
              N
            </div>
            
            <div className="flex-1">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                "Three years ago, I almost missed a hackathon deadline—not because I wasn't capable, 
                but because I was completely overwhelmed juggling my startup, freelance work, and creative projects. 
                That night, exhausted and defeated, I realized something: traditional productivity tools weren't built for people like us.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                People with ADHD. People with multiple passions. People who care deeply about their work AND their wellbeing.
              </p>
              
              <p className="text-lg text-[#635DFF] font-medium leading-relaxed">
                That's when Nrvii was born—from the understanding that your complexity isn't a flaw to fix, 
                but a superpower to nurture."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;
