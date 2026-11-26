import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router';
import { TooltipProvider } from 'src/components/ui/tooltip';

import 'nprogress/nprogress.css';
import 'src/index.css';
import App from 'src/App';
import { SidebarProvider } from 'src/contexts/SidebarContext';

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <SidebarProvider>
      <BrowserRouter>
        <TooltipProvider delayDuration={200}>
          <App />
        </TooltipProvider>
      </BrowserRouter>
    </SidebarProvider>
  </HelmetProvider>
);
