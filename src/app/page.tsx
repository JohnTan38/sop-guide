// ...existing code...
"use client";

import React, { useState } from 'react';
import { LucideProps, Search, Download, ChevronLeft, ChevronRight, FileText, Users, Lock, Key, Activity, Database } from 'lucide-react';

// Type definitions
interface SopPage {
  id: number;
  title: string;
  subtitle: string;
  content: {
    heading: string;
    text: string;
  }[];
  image?: string;
  icon?: React.ComponentType<LucideProps>;
}

interface EskerSubPage {
  id: string;
  title: string;
  content: React.ReactNode;
}

// Enhanced SOP data with icons
const sopData: SopPage[] = [
  {
    id: 1,
    title: 'Users Management - Create a new user',
    subtitle: 'Step-by-step guide for creating a new user account.',
    icon: Users,
    content: [
      {
        heading: 'Key note for new user',
        text: 'Use Email for identifier, and a single profile and one or more groups should be assigned for each new user. Welcome email should be sent out to the new user.',
      },
      {
        heading: 'Note: Profile & group selection',
        text: 'Select the appropriate profile from the dropdown and assign relevant groups to the new user.',
      },
    ],
    image: 'https://iili.io/KBpgFRe.jpg',
  },
  {
    id: 2,
    title: 'Users Management - Lock / Unlock account',
    subtitle: 'Procedure to lock or unlock a user account.',
    icon: Lock,
    content: [
      {
        heading: 'Administrator Action',
        text: 'The administrator can manually lock / unlock a user\'s account. It is advised to lock out a user when he/she leaves the organisation.',
      },
      {
        heading: 'Locking Login',
        text: 'To lock the user account, check the "Lock login" checkbox and click the "Save" button.',
      },
    ],
    image: 'https://iili.io/KBpbS2a.jpg',
  },
  {
    id: 3,
    title: 'Users Management - Reset password',
    subtitle: 'How to reset a user\'s password.',
    icon: Key,
    content: [
      {
        heading: 'Password Reset',
        text: 'The administrator can Resend the welcome email or send an email link to Reset password on the user\'s behalf. The reset password email contains an URL to the reset password page.',
      },
    ],
    image: 'https://iili.io/KBy9CyG.jpg',
  },
  {
    id: 4,
    title: 'ESKER Invoice Download Schematic Diagram',
    subtitle: 'Your automated process workflow.',
    icon: Activity,
    content: [
      {
        heading: 'Schematic Workflow Overview',
        text: 'This section provides a high-level overview of the automated process for downloading bills and invoices.',
      },
      {
        heading: 'Schematic Architecture Diagram',
        text: 'A detailed diagram illustrating the system architecture. This diagram can be interacted with to view different parts of the system.',
      },
    ],
    image: "https://iili.io/KByJkEN.jpg",
  },
];

// ESKER System Overview content
const eskerSubPages: EskerSubPage[] = [
  {
    id: 'purpose',
    title: 'System Purpose',
    content: (
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-indigo-500">
          <h3 className="text-2xl font-bold text-indigo-800 mb-4 flex items-center">
            <FileText className="mr-2" />
            Purpose
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            Invoice verification and approval (by HOD) and business process automation pipeline.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <Activity className="mr-2 text-green-600" />
              Processes
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Invoice data extraction by Esker AI.</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Automated update of invoice details to SAP (RPA).</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <Users className="mr-2 text-blue-600" />
              Components
            </h3>
            <ul className="space-y-3">
              {['Outlook Email', 'Esker Invoice Processing Software', 'RPA (Robotic Process Automation)', 'SAP'].map((component, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">{component}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'workflow',
    title: 'Business Process Workflow',
    content: (
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl border-l-4 border-purple-500">
          <h3 className="text-2xl font-bold text-purple-800 mb-4">
            Esker Business Process Automation Workflow
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            This workflow illustrates the automated steps in the Esker Business Process pipeline.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <h4 className="text-xl font-bold text-gray-800 mb-4">Workflow Steps</h4>
          <div className="space-y-4">
            {[
              'Vendor Invoices are sent to the Outlook Email Inbox.',
              'Invoices are processed by the Esker Invoice Processing System, which extracts invoice details.',
              'The extracted details are then automatically updated in SAP via RPA.',
              'The Esker Invoice Processing System interacts with the Invoice details extraction component to facilitate the extraction process.'
            ].map((step, index) => (
              <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                  {index + 1}
                </div>
                <p className="text-gray-700 leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <h4 className="text-xl font-bold text-gray-800 mb-4">Workflow Diagram</h4>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg">
            <svg viewBox="0 0 800 400" className="w-full h-auto">
              {/* Vendor Invoices */}
              <g>
                <rect x="50" y="50" width="120" height="60" rx="8" fill="#3B82F6" />
                <text x="110" y="75" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Vendor</text>
                <text x="110" y="90" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Invoices</text>
              </g>
              
              {/* Arrow 1 */}
              <path d="M170 80 L220 80" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
              
              {/* Outlook Email */}
              <g>
                <rect x="230" y="50" width="120" height="60" rx="8" fill="#10B981" />
                <text x="290" y="75" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Outlook</text>
                <text x="290" y="90" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Email Inbox</text>
              </g>
              
              {/* Arrow 2 */}
              <path d="M350 80 L400 80" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
              
              {/* Esker Processing */}
              <g>
                <rect x="410" y="30" width="140" height="100" rx="8" fill="#8B5CF6" />
                <text x="480" y="60" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Esker Invoice</text>
                <text x="480" y="75" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Processing</text>
                <text x="480" y="90" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">System</text>
                <text x="480" y="110" textAnchor="middle" fill="white" fontSize="10">(AI Extraction)</text>
              </g>
              
              {/* Arrow 3 */}
              <path d="M550 80 L600 80" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
              
              {/* RPA */}
              <g>
                <rect x="610" y="50" width="120" height="60" rx="8" fill="#F59E0B" />
                <text x="670" y="75" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">RPA</text>
                <text x="670" y="90" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Automation</text>
              </g>
              
              {/* Arrow 4 (down) */}
              <path d="M670 110 L670 160" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
              
              {/* SAP */}
              <g>
                <rect x="610" y="170" width="120" height="60" rx="8" fill="#DC2626" />
                <text x="670" y="195" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">SAP System</text>
                <text x="670" y="210" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">(Update)</text>
              </g>
              
              {/* Invoice Details Extraction (connected to Esker) */}
              <g>
                <rect x="250" y="170" width="140" height="80" rx="8" fill="#EC4899" />
                <text x="320" y="195" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Invoice Details</text>
                <text x="320" y="210" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Extraction</text>
                <text x="320" y="225" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Component</text>
              </g>
              
              {/* Bidirectional arrow between Esker and Details Extraction */}
              <path d="M410 130 L390 170" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
              <path d="M390 170 L410 130" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
              
              {/* Arrow definitions */}
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#6B7280" />
                </marker>
              </defs>
              
              {/* Labels for process flow */}
              <text x="195" y="70" textAnchor="middle" fill="#6B7280" fontSize="10">Email</text>
              <text x="375" y="70" textAnchor="middle" fill="#6B7280" fontSize="10">Process</text>
              <text x="575" y="70" textAnchor="middle" fill="#6B7280" fontSize="10">Automate</text>
              <text x="685" y="145" textAnchor="middle" fill="#6B7280" fontSize="10">Update</text>
              <text x="350" y="155" textAnchor="middle" fill="#6B7280" fontSize="10">Extract</text>
            </svg>
          </div>
          
          {/* Legend */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-500 rounded"></div>
              <span>Vendor Input</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span>Email System</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-purple-500 rounded"></div>
              <span>AI Processing</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-yellow-500 rounded"></div>
              <span>RPA Automation</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-red-500 rounded"></div>
              <span>SAP Integration</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-pink-500 rounded"></div>
              <span>Data Extraction</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

// Master Data Update Sub-pages (integrated from master_data_update_tabs.jsx)
const masterDataSubPages: EskerSubPage[] = [
  {
    id: 'export',
    title: 'Export Master Data',
    content: (
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-indigo-500">
          <h3 className="text-2xl font-bold text-indigo-800 mb-4">Export Master Data</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            Click the <strong>Export to CSV</strong> button. Wait for the My Data Downloads page to display status <strong>Success</strong>. Download the CSV file. Note that backups are automatically removed from the system after 2 months.
          </p>
        </div>
        <div className="bg-gray-50 p-4 rounded-xl space-y-4">
          <img src="https://sop-guide-five-vercel.app/master_data_update_1.png" alt="Export Master Data" className="w-full h-auto rounded-lg shadow-sm" />
        </div>
      </div>
    ),
  },
  {
    id: 'modify',
    title: 'Modify Data in Template',
    content: (
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border-l-4 border-green-500">
          <h3 className="text-2xl font-bold text-green-800 mb-4">Modify Data in Template</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            Use the provided Excel template to insert or modify rows. Always include the full set of data when saving. After editing, save the file as <strong>CSV UTF-8 (Comma delimited)</strong>.
          </p>
        </div>
        <div className="bg-gray-50 p-4 rounded-xl space-y-4">
          <img src="https://sop-guide-five-vercel.app/master_data_update_2.png" alt="Modify Master Data" className="w-full h-auto rounded-lg shadow-sm" />
        </div>
      </div>
    ),
  },
  {
    id: 'import',
    title: 'Import Guidelines',
    content: (
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border-l-4 border-yellow-500">
          <h3 className="text-2xl font-bold text-yellow-800 mb-4">Import Guidelines</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            Refer to the process guidelines in <strong>process_guidelines_vendor_and_GL.txt</strong> for Vendor and GL updates. Ensure compliance before final import.
          </p>
        </div>
      </div>
    ),
  },
];

// Master Data Update Page with Sub-navigation
const masterDataPage: SopPage = {
  id: 4, // will be kept as the 4th item after we reindex sopData below
  title: 'Master Data Update',
  subtitle: 'Procedure for exporting, modifying, and re-importing master data.',
  icon: Database,
  content: [
    {
      heading: 'Overview',
      text: 'This section covers the export, modification, and import process for Master Data updates.'
    },
  ],
};

// Insert masterDataPage into sopData as 4th item and reindex all sopData ids
sopData.splice(3, 0, masterDataPage);
sopData.forEach((p, idx) => { p.id = idx + 1; });

// Create ESKER page combining both sub-pages; set id dynamically after sopData reindex
const eskerPage: SopPage = {
  id: sopData.length + 1,
  title: 'ESKER System Overview',
  subtitle: 'Comprehensive overview of the ESKER invoice processing system.',
  icon: FileText,
  content: [
    {
      heading: 'System Information',
      text: 'This section provides detailed information about the ESKER system, including its purpose, components, and workflow processes.',
    },
  ],
};

export default function EnhancedSopGuide() {
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [eskerSubPage, setEskerSubPage] = useState('purpose');
  const [masterSubPage, setMasterSubPage] = useState('export');

  // Combine all pages including ESKER
  const allPages = [...sopData, eskerPage];

  // Filter pages based on search query
  const filteredPages = allPages.filter(page =>
    page.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    page.content.some(section =>
      section.text.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const page = filteredPages[currentPage];

  const handleNext = () => {
    setCurrentPage((prev) => (prev < filteredPages.length - 1 ? prev + 1 : prev));
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(0);
  };

  const handleDownloadPdf = () => {
    window.print();
  };

  const handlePageSelect = (index: number) => {
    setCurrentPage(index);
    const selectedId = filteredPages[index].id;
    if (selectedId === eskerPage.id) {
      setEskerSubPage('purpose');
    }
    if (selectedId === 4) {
      setMasterSubPage('export');
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 text-gray-800 font-sans">
      <style jsx global>{`
        @media print {
          .print-hidden {
            display: none !important;
          }
          body {
            background-color: #fff !important;
            -webkit-print-color-adjust: exact;
          }
        }
        
        .gradient-border {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 2px;
          border-radius: 12px;
        }
        
        .gradient-border > div {
          background: white;
          border-radius: 10px;
        }
      `}</style>

      {/* Enhanced Sidebar */}
      <aside className="print-hidden w-80 bg-white/90 backdrop-blur-sm p-6 shadow-xl border-r border-gray-200">
        <div className="mb-8">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
            ESKER SOP Guide
          </h1>
          <p className="text-sm text-gray-600">Standard Operating Procedures</p>
        </div>
        
        {/* Enhanced Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search procedures..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/70 backdrop-blur-sm transition-all duration-300"
            />
          </div>
        </div>

        {/* Navigation List */}
        <div className="space-y-3 max-h-[60vh] overflow-y-auto">
          {filteredPages.map((sop, index) => {
            const IconComponent = sop.icon;
            return (
              <button
                key={sop.id}
                onClick={() => handlePageSelect(index)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] ${
                  currentPage === index
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white/70 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-md border border-gray-100'
                }`}
              >
                <div className="flex items-center space-x-3">
                  {IconComponent && (
                    <IconComponent 
                      size={20} 
                      className={currentPage === index ? 'text-white' : 'text-indigo-600'} 
                    />
                  )}
                  <div>
                    <div className={`font-semibold text-sm ${currentPage === index ? 'text-white' : 'text-gray-900'}`}>
                      {sop.title}
                    </div>
                    <div className={`text-xs mt-1 ${currentPage === index ? 'text-indigo-100' : 'text-gray-500'}`}>
                      {sop.subtitle.slice(0, 50)}...
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
          {filteredPages.length === 0 && (
            <div className="text-gray-500 p-4 text-center bg-white/50 rounded-xl">
              <Search size={24} className="mx-auto mb-2 text-gray-400" />
              No results found.
            </div>
          )}
        </div>
      </aside>

      {/* Enhanced Main Content */}
      <main className="flex-1 p-8">
        <div className="gradient-border max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-xl">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {page.title}
                </h2>
                <p className="text-gray-600">{page.subtitle}</p>
              </div>
              <div className="print-hidden flex items-center space-x-4">
                <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {currentPage + 1} of {filteredPages.length}
                </div>
                <button
                  onClick={handleDownloadPdf}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
                >
                  <Download size={16} />
                  <span>PDF</span>
                </button>
              </div>
            </div>

            {/* Master Data sub-navigation */}
            {page.id === 4 && (
              <div className="print-hidden mb-8">
                <div className="flex space-x-2 bg-gray-100 p-2 rounded-xl">
                  {masterDataSubPages.map((subPage) => (
                    <button
                      key={subPage.id}
                      onClick={() => setMasterSubPage(subPage.id)}
                      className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                        masterSubPage === subPage.id
                          ? 'bg-indigo-600 text-white shadow-md'
                          : 'text-gray-600 hover:bg-white hover:shadow-sm'
                      }`}
                    >
                      {subPage.title}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ESKER System sub-navigation */}
            {page.id === eskerPage.id && (
              <div className="print-hidden mb-8">
                <div className="flex space-x-2 bg-gray-100 p-2 rounded-xl">
                  {eskerSubPages.map((subPage) => (
                    <button
                      key={subPage.id}
                      onClick={() => setEskerSubPage(subPage.id)}
                      className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                        eskerSubPage === subPage.id
                          ? 'bg-indigo-600 text-white shadow-md'
                          : 'text-gray-600 hover:bg-white hover:shadow-sm'
                      }`}
                    >
                      {subPage.title}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Content Area */}
            {page.id === eskerPage.id ? (
              // ESKER System content
              <div className="mb-8">
                {eskerSubPages.find(subPage => subPage.id === eskerSubPage)?.content}
              </div>
            ) : page.id === 4 ? (
              // Master Data content
              <div className="mb-8">
                {masterDataSubPages.find(subPage => subPage.id === masterSubPage)?.content}
              </div>
            ) : (
              // Regular SOP content
              <div className="grid lg:grid-cols-3 gap-8 mb-8">
                {page.image && (
                  <div className="lg:col-span-2">
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <img
                        src={page.image}
                        alt={page.title}
                        className="w-full h-auto rounded-lg shadow-sm"
                      />
                    </div>
                  </div>
                )}
                <div className={page.image ? 'lg:col-span-1' : 'lg:col-span-3'}>
                  <div className="space-y-6">
                    {page.content.map((section, index) => (
                      <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-indigo-500">
                        <h3 className="text-xl font-semibold text-indigo-800 mb-3">
                          {section.heading}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {section.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Enhanced Navigation */}
            <div className="print-hidden flex justify-between items-center pt-6 border-t border-gray-200">
              <button
                onClick={handlePrevious}
                disabled={currentPage === 0}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  currentPage === 0
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg transform hover:scale-[1.02]'
                }`}
              >
                <ChevronLeft size={20} />
                <span>Previous</span>
              </button>
              
              <div className="flex space-x-2">
                {filteredPages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageSelect(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentPage === index
                        ? 'bg-indigo-600'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={handleNext}
                disabled={currentPage === filteredPages.length - 1}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  currentPage === filteredPages.length - 1
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg transform hover:scale-[1.02]'
                }`}
              >
                <span>Next</span>
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
// ...existing code...