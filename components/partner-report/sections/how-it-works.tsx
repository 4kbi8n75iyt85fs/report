import { SectionWrapper } from "@/components/report/section-wrapper";
import { CalloutBox } from "@/components/report/callout-box";
import {
    Megaphone,
    Phone,
    MapPin,
    UserCheck,
    Smartphone,
    BookOpen,
    FileText,
    Users,
    ChevronRight
} from "lucide-react";

const workflowSteps = [
    {
        icon: Megaphone,
        title: "FB Ads → WhatsApp",
        description: "We run Facebook ads at around $1/day targeting parents in Dhaka looking for tutors. When they click, they message us on WhatsApp. These leads come in daily and are collected and forwarded to our call center rep.",
        color: "bg-blue-100",
    },
    {
        icon: Phone,
        title: "Call Center Rep Contacts Lead",
        description: "Our call center rep calls each lead, collects basic info like subjects needed, student&apos;s availability, and location. They then schedule a home evaluation visit for the next day with our area manager.",
        color: "bg-purple-100",
    },
    {
        icon: MapPin,
        title: "Area Manager Home Visit",
        description: "The area manager visits the student&apos;s home, assesses their weak points, and creates a personalized study routine with the parent. They identify which chapters need more focus, which less, and what days/times work best for tutoring.",
        color: "bg-green-100",
    },
    {
        icon: UserCheck,
        title: "Teacher Relation Manager Assigns Tutor",
        description: "From our pool of pre-trained tutors, the teacher relation manager picks the best match based on subjects, location, and schedule. The tutor is assigned and informed about the student&apos;s needs and routine.",
        color: "bg-yellow-100",
    },
    {
        icon: Smartphone,
        title: "Tutor Gets App Access",
        description: "We create an account for the tutor in our portal app. The app shows them exactly what to teach each day, which student, what time, and all the teaching content they need. They just follow the schedule.",
        color: "bg-orange-100",
    },
    {
        icon: BookOpen,
        title: "Teaching Begins",
        description: "The tutor starts teaching using our provided content. It&apos;s broken into parts - tutor memorizes one part, teaches it, moves to the next. Everything is provided so even less experienced tutors can deliver quality instruction.",
        color: "bg-pink-100",
    },
    {
        icon: FileText,
        title: "Exams & Grading",
        description: "We provide test papers for regular assessments. The tutor takes the exam with the student, sends the paper to our teacher relation manager who grades it and returns the marks. Results are tracked over time.",
        color: "bg-cyan-100",
    },
    {
        icon: Users,
        title: "Parent Meetings & Payment",
        description: "Every 2 weeks, the area manager visits for a parent-teacher meeting to get feedback on progress. On the 4th week, they also collect payment, pay the tutor their share on the spot, and send the rest to us.",
        color: "bg-indigo-100",
    },
];

export function HowItWorks() {
    return (
        <SectionWrapper id="how-it-works" bgColor="secondary">
            <div className="mb-12">
                <span className="inline-block bg-primary text-primary-foreground px-4 py-2 text-sm font-bold uppercase tracking-widest mb-4">
                    How It Works
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
                    The Complete Flow
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                    From Facebook ad to monthly payment — here&apos;s exactly how each student flows through
                    our system.
                </p>
            </div>

            {/* Workflow Steps */}
            <div className="space-y-4 mb-12">
                {workflowSteps.map((step, index) => {
                    const Icon = step.icon;

                    return (
                        <div key={index} className="brutalist-card p-6">
                            <div className="flex items-start gap-4">
                                <div className={`p-3 ${step.color} flex-shrink-0`}>
                                    <Icon className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-sm font-bold opacity-60">Step {index + 1}</span>
                                        <ChevronRight className="w-4 h-4 opacity-60" />
                                        <span className="font-bold text-lg">{step.title}</span>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Visual Summary */}
            <div className="brutalist-card p-8">
                <h3 className="font-bold text-xl mb-6 uppercase tracking-wider">Quick Summary</h3>
                <div className="flex flex-wrap items-center justify-center gap-2 text-sm md:text-base">
                    <span className="bg-blue-100 px-3 py-1 font-medium">FB Ad</span>
                    <ChevronRight className="w-4 h-4" />
                    <span className="bg-purple-100 px-3 py-1 font-medium">WhatsApp</span>
                    <ChevronRight className="w-4 h-4" />
                    <span className="bg-green-100 px-3 py-1 font-medium">Call</span>
                    <ChevronRight className="w-4 h-4" />
                    <span className="bg-yellow-100 px-3 py-1 font-medium">Home Visit</span>
                    <ChevronRight className="w-4 h-4" />
                    <span className="bg-orange-100 px-3 py-1 font-medium">Tutor Assigned</span>
                    <ChevronRight className="w-4 h-4" />
                    <span className="bg-pink-100 px-3 py-1 font-medium">Teaching</span>
                    <ChevronRight className="w-4 h-4" />
                    <span className="bg-cyan-100 px-3 py-1 font-medium">Exams</span>
                    <ChevronRight className="w-4 h-4" />
                    <span className="bg-indigo-100 px-3 py-1 font-medium">Payment</span>
                </div>
            </div>

            <div className="mt-12">
                <CalloutBox type="insight" title="Key Point">
                    <p>
                        <strong>The cycle repeats monthly.</strong> Parent pays → we pay tutor immediately →
                        area manager keeps his cut → rest comes to us. Teacher never chases parent for money.
                        Parent never worries about teacher quality.
                    </p>
                </CalloutBox>
            </div>
        </SectionWrapper>
    );
}
