import preact from "preact";

const StorageTab: preact.ComponentType = () => {
  return (
    <div class="flex-1 flex flex-col relative w-full overflow-hidden">
      <div class="flex-1 flex flex-col items-center justify-center p-8 text-center">
        <h2 class="text-2xl font-bold mb-4 text-blue-400">Storage System</h2>
        <p class="text-neutral-400">Access your PC boxes here.</p>
        <div class="mt-8 p-4 border border-dashed border-white/10 rounded-lg bg-white/5">
          Coming Soon
        </div>
      </div>
    </div>
  );
};

export default StorageTab;
